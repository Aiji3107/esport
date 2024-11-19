import NewsIcon from '@/components/icon/news.svg'
import Image from 'next/image';
export default function BigButton() {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        color: "black",
        display: "flex",
        flexDirection: "column", // Mengatur konten di dalam button secara vertikal
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        padding: "10px",
        cursor: "pointer",
        backgroundColor: "#000066", // Warna latar belakang button
        textAlign: "center",
      }}
    >
      {/* Ikon di atas */}
      <Image src={NewsIcon} alt='icon' />

      {/* Teks di bawah */}
      <span style={{ fontSize: "14px", color: "#E4FF00" }}>News</span>
    </div>
  );
}
