// app/admin/layout.js
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    // Cek apakah user sudah login
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      // Redirect ke halaman login admin jika belum login
      router.push("/admin");
    }
  }, [router]);

  return (
    <div>
      {/* Navbar khusus admin */}
      <nav className="text-green-600">
        <a href="/admin/dashboard">Dashboard</a>
        <a href="/admin/masterData">Master Data</a>
        <a href="/admin/manageUser">Manage User</a>
        <a href="/admin/news">News</a>
      </nav>
      {children}
    </div>
  );
}
