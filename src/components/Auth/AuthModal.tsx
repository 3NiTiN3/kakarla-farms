"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const AuthModal = ({ onClose }: { onClose: () => void }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // NEW: Capture Username
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAuth = async () => {
    setLoading(true);
    setError("");

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        // Step 1: Create the user
        const { data, error } = await supabase.auth.signUp({ email, password });

        if (error) throw error;

        // Step 2: Insert Username into Profiles Table
        if (data?.user) {
          const { error: profileError } = await supabase
            .from("profiles")
            .insert([{ id: data.user.id, username }]);

          if (profileError) throw profileError;
        }
      }
      onClose(); // Close modal on success
    } catch (err: unknown) { 
        if (err instanceof Error) {
          setError(err.message);
        }
      }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 z-50">
        <h2 className="text-xl font-semibold text-center">{isLogin ? "Login" : "Sign Up"}</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {!isLogin && (
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-3"
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-3"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-3"
          required
        />

        <button
          onClick={handleAuth}
          className="w-full bg-green-600 text-white py-2 mt-4 rounded"
          disabled={loading}
        >
          {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
        </button>

        <p className="text-sm text-center mt-3 cursor-pointer text-blue-600" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "New here? Sign Up" : "Already have an account? Login"}
        </p>

        <button onClick={onClose} className="w-full bg-gray-300 text-black py-2 mt-3 rounded">Close</button>
      </div>
    </div>
  );
};

export default AuthModal;
