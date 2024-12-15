"use client"

import { useState } from "react";
import Disclaimer from "@/components/disclaimer";
import HeaderTitle from "@/components/HeaderTitle";
import { Instagram, X, YouTube } from "@mui/icons-material";
import Image from "next/image";

import Jersey1 from "@/components/assets/jersey/Jersey1.png";
import Jersey2 from "@/components/assets/jersey/Jersey2.png"; // Import Jersey2

export default function ShopPage() {
  // State untuk gambar, warna, dan kontrol animasi
  const [jerseyImage, setJerseyImage] = useState(Jersey1);
  const [textColor, setTextColor] = useState("#FFC107");
  const [fade, setFade] = useState(false); // State untuk kontrol fade animation

  // Fungsi untuk menangani perubahan gambar dan animasi
  const handleJerseyClick = () => {
    // Mulai fade out
    setFade(true);

    // Tunggu sampai fade-out selesai sebelum mengubah gambar
    setTimeout(() => {
      // Toggle gambar dan warna
      setJerseyImage(jerseyImage === Jersey1 ? Jersey2 : Jersey1);
      setTextColor(jerseyImage === Jersey1 ? "#FFB300" : "#FFC107"); // Ubah warna teks

      // Setelah gambar diubah, mulai fade in
      setFade(false);
    }, 250); // Durasi fade-out 500ms
  };

  return (
    <div className="flex flex-col px-4 min-h-screen">
      {/* Header Title */}
      <div className="py-2">
        <HeaderTitle title="SHOP" />
      </div>

      {/* Disclaimer */}
      <Disclaimer text="Explore our exclusive collection of merchandise and support your favorite team in style. From jerseys and hoodies to collectibles and accessories, our shop has everything a true fan needs. Check out our latest arrivals and limited-edition items below." />

      {/* Section: Jacket and Jersey */}
      <div className="flex flex-col py-4">
        <h1 className="text-xl font-semibold">Jacket And Jersey</h1>

        {/* Product Layout */}
        <div className="flex flex-wrap gap-4 mt-4 justify-between">
          {/* Product Card 1 */}
          <div className="text-center flex flex-col items-center">
            <div
              className={`relative cursor-pointer transition-all duration-500 ${
                fade ? "opacity-0" : "opacity-100"
              }`} // Fade-out saat gambar berubah
              onClick={handleJerseyClick}
            >
              <Image
                src={jerseyImage} // Gunakan state jerseyImage
                width={160}
                height={160}
                alt="PRX Jersey 2024/2025"
                className="rounded-md"
              />
            </div>
            <h2 className="mt-2 text-lg font-medium">PRX JERSEY 2024/2025</h2>
            <h2 className="text-[textColor] font-bold">${49.99}</h2>{" "}
            {/* Ganti warna teks dengan state textColor */}
          </div>

          {/* Product Card 2 */}
          <div className="text-center flex flex-col items-center">
            <Image
              src={Jersey1}
              width={160}
              height={160}
              alt="PRX Jacket 2024/2025"
              className="rounded-md"
            />
            <h2 className="mt-2 text-lg font-medium">PRX JACKET 2024/2025</h2>
            <h2 className="text-[#FFC107] font-bold">$49.99</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
