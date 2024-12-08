// app/layout.js (Global Layout)
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import styles from "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "paper rex",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          {/* Navbar global hanya untuk user/guest */}
          <nav className="text-red-700">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/login">Login</a>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
