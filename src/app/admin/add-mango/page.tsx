"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../admin.module.css";
import { supabase } from "@/lib/supabaseClient";

export default function AddMango() {
  const [form, setForm] = useState({ variety: "", quantity: "", price: "", unit: "KG" });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.from("mango_inventory").insert([
      { variety: form.variety, quantity: Number(form.quantity), price: Number(form.price), unit: form.unit },
    ]);

    if (error) console.error("Error adding mango:", error);
    else router.push("/admin");
  }

  return (
    <div className={styles.adminContainer}>
      <h1 className={styles.adminTitle}>Add Mango</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Variety:</label>
        <input type="text" name="variety" value={form.variety} onChange={handleChange} required />

        <label>Quantity:</label>
        <input type="number" name="quantity" value={form.quantity} onChange={handleChange} required />

        <label>Price:</label>
        <input type="number" name="price" value={form.price} onChange={handleChange} required />

        <label>Sell by:</label>
        <select name="unit" value={form.unit} onChange={handleChange}>
          <option value="KG">KG</option>
          <option value="Piece">Piece</option>
        </select>

        <button type="submit" className={styles.addButton}>Add Mango</button>
      </form>
    </div>
  );
}
