"use client";

import { useState, useEffect } from "react";
//import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./admin.module.css";
import { supabase } from "@/lib/supabaseClient";

type Mango = {
  id: number;
  variety: string;
  quantity: number;
  price: number;
  unit: "KG" | "Piece";
};

export default function AdminPage() {
  const [mangoes, setMangoes] = useState<Mango[]>([]);
  //const router = useRouter();

  useEffect(() => {
    fetchMangoes();
  }, []);

  async function fetchMangoes() {
    const { data, error } = await supabase.from("mango_inventory").select("*");
    if (error) console.error("Error fetching mangoes:", error);
    else setMangoes(data);
  }

  async function deleteMango(id: number) {
    await supabase.from("mango_inventory").delete().eq("id", id);
    fetchMangoes();
  }

  return (
    <div className={styles.adminContainer}>
      <h1 className={styles.adminTitle}>Admin Dashboard</h1>
      <Link href="/admin/add-mango" className={styles.addButton}>+ Add Mango</Link>

      <table className={styles.mangoTable}>
        <thead>
          <tr>
            <th>Variety</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Unit</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mangoes.map((mango) => (
            <tr key={mango.id}>
              <td>{mango.variety}</td>
              <td>{mango.quantity}</td>
              <td>₹{mango.price}</td>
              <td>{mango.unit}</td>
              <td>
                <button className={styles.deleteButton} onClick={() => deleteMango(mango.id)}>❌ Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
