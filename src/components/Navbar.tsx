"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  return (
    <nav className="shadow-md">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center flex-wrap">
        {/* Logo as Home Button */}
        <Link href="/" className="flex items-center space-x-2 logo-container">
          <span className="font-bold logo-text">Kakarla</span>
          <Image src="/logo.png" alt="Kakarla Farma Logo" width={50} height={50} />
          <span className="font-bold logo-text">Farma</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="/products" className="nav-text hover:text-[var(--nav-hover)]">Products</Link>
          <Link href="/about" className="nav-text hover:text-[var(--nav-hover)]">About Us</Link>
          <Link href="/contact" className="nav-text hover:text-[var(--nav-hover)]">Contact</Link>
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

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-[var(--nav-bg)] w-full">
            <Link href="/products" className="nav-text hover:text-[var(--nav-hover)]">Products</Link>
            <Link href="/about" className="nav-text hover:text-[var(--nav-hover)]">About Us</Link>
            <Link href="/contact" className="nav-text hover:text-[var(--nav-hover)]">Contact</Link>
            <Link href="/cart" className="relative flex items-center">
              <ShoppingCart size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
