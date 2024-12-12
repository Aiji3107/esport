"use client"
import Image from "next/image";
import { useState } from "react";

export default function Carousel() {
  // Daftar gambar yang akan ditampilkan dalam carousel
const images = [
  "/image/2022-masters-grand-finals-crowd.jpg",
  "/image/2022-masters-grand-finals-fans.jpg",
  "/image/2023-champions-d4v41-mindfreak-handshake.jpg",
  "/image/2023-champions-d4v41-something-jinggg-f0rsaken-mindfreak.jpg",
  "/image/2023-champions-f0rsaken-something.jpg",
];

  // State untuk melacak gambar yang aktif
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fungsi untuk mengubah gambar ke sebelumnya
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Fungsi untuk mengubah gambar ke berikutnya
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      style={{
        position: "relative",
        width: "358px",
        height: "195px",
        borderRadius: "6px",
        overflow: "hidden",
      }}
    >
      {/* Gambar yang mengisi seluruh area carousel */}
      <Image
        src={images[currentImageIndex]} // Mengambil gambar berdasarkan index saat ini
        alt="Carousel Image"
        layout="fill"
        objectFit="cover"
      />

      {/* Overlay hitam dengan opacity 20% */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "rgba(0, 0, 0, 0.2)", // Warna hitam dengan opacity 20%
          zIndex: 1, // Agar overlay di atas gambar
        }}
      ></div>

      {/* Tombol navigasi untuk gambar sebelumnya */}
      <button
        onClick={prevImage}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          zIndex: 2, // Tombol di atas overlay
        }}
      >
        &#8249; {/* Arrow kiri */}
      </button>

      {/* Tombol navigasi untuk gambar berikutnya */}
      <button
        onClick={nextImage}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          zIndex: 2, // Tombol di atas overlay
        }}
      >
        &#8250; {/* Arrow kanan */}
      </button>

      {/* Teks di bawah gambar */}
      <h1
        style={{
          position: "absolute",
          bottom: "10px",
          color: "white",
          margin: 0,
          left: "10px", // Menambahkan padding kiri untuk teks
          zIndex: 2, // Teks di atas overlay
        }}
      >
        PRX Win 2 vs 1 against Sentinels on Masters Tokyo
      </h1>
    </div>
  );
}
