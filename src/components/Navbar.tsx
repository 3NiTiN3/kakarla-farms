// src/components/Navbar/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react"; // Added ChevronDown for dropdown
import { useCart } from "@/context/CartContext";
import { supabase } from "@/lib/supabaseClient";
import AuthModal from "@/components/Auth/AuthModal";
import { User } from "@supabase/supabase-js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown

  useEffect(() => {
    const fetchUserData = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error.message);
        return;
      }

      setUser(data?.user);

      if (data?.user) {
        // Fetch username from profiles table
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("username")
          .eq("id", data.user.id)
          .single();

        if (profileError) {
          console.error("Error fetching username:", profileError.message);
        }

        setUsername(profile?.username || null);
      }
    };

    fetchUserData();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
      if (!session) setUsername(null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setUsername(null);
    setDropdownOpen(false); // Close dropdown when logging out
  };

  return (
    <nav className="shadow-md">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center flex-wrap">
        {/* Logo as Home Button */}
        <Link href="/" className="flex items-center space-x-2 logo-container">
          <span className="font-bold logo-text">Kakarla</span>
          <Image src="/logo.png" alt="Kakarla Farma Logo" width={50} height={50} />
          <span className="font-bold logo-text">Farms</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="/products" className="nav-text hover:text-[var(--nav-hover)]">Products</Link>
          <Link href="/about" className="nav-text hover:text-[var(--nav-hover)]">About Us</Link>
          <Link href="/contact" className="nav-text hover:text-[var(--nav-hover)]">Contact</Link>

          {/* Auth Dropdown */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 text-[#3F3B37] font-semibold"
              >
                <span>{username || "User"}</span>
                <ChevronDown size={20} />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-50">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Login / Sign Up
            </button>
          )}

          {/* Cart Icon */}
          <Link href="/cart" className="relative flex items-center">
            <ShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden ml-auto">
          {isOpen ? <X size={30} color="var(--nav-txt)" /> : <Menu size={30} color="var(--nav-txt)" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-[var(--nav-bg)] w-full">
          <Link href="/products" className="nav-text hover:text-[var(--nav-hover)]">Products</Link>
          <Link href="/about" className="nav-text hover:text-[var(--nav-hover)]">About Us</Link>
          <Link href="/contact" className="nav-text hover:text-[var(--nav-hover)]">Contact</Link>
          
          {/* Cart Icon */}
          <Link href="/cart" className="relative flex items-center">
            <ShoppingCart size={24} />
          </Link>

          {/* Auth Dropdown for Mobile */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 text-[#3F3B37] font-semibold"
              >
                <span>{username || "User"}</span>
                <ChevronDown size={20} />
              </button>

              {/* Dropdown Menu for Mobile */}
              {dropdownOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-50">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              className="bg-green-600 text-white px-4 py-2 rounded w-3/4"
            >
              Login / Sign Up
            </button>
          )}
        </div>
      )}

      {/* Auth Modal */}
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </nav>
  );
}
