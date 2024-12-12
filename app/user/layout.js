// app/user/layout.js (User Layout)
"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function UserLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          {/* Navbar khusus untuk user */}
          <nav className="text-yellow-700">
            <Link href="/">Users</Link>
            <Link href="/">Users 2</Link>
          </nav>
          {children}
          <Navbar />
        </div>
      </body>
    </html>
  );
}
