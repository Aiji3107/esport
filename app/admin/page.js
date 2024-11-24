// Halaman Untuk login Admin
"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginPage() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    // Handle Login
    const handleLogin = () => {
        // Simulasi Login
        setIsLoggedIn(true);
        // Setelah Sukses ke dashboard
        router.push('/admin/dashboard');
        // Gagal Login ke registers
        // router.push('/registers');
        }
  return (
    <div>
      <h1>Admin Login</h1>
      <button onClick={handleLogin}>Login</button>
      {isLoggedIn && <p>Redirecting...</p>}
    </div>
  );
}
