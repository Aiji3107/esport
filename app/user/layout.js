// app/user/layout.js (User Layout)
"use client";

import Navbar from "@/components/Navbar";

export default function UserLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          {/* Navbar khusus untuk user */}
          <nav className="text-yellow-700">
            <a href="/">Users</a>
            <a href="/">Users 2</a>
          </nav>
          {children}
          <Navbar />
        </div>
      </body>
    </html>
  );
}
