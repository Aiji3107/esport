import Image from "next/image";

export default function BigButton({ text, icon, href }) {
 
  return (
    <a href={href} className="block" style={{ textDecoration: "none" }}>
      <div
        style={{
          width: "80px",
          height: "80px",
          color: "black",
          display: "flex",
          flexDirection: "column", // Mengatur konten di dalam button secara vertikal
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "8px",
          cursor: "pointer",
          backgroundColor: "#000066", // Warna latar belakang button
          textAlign: "center",
        }}
        className="shadow-lg"
      >
        {/* Ikon di atas */}
        <Image src={icon} alt="icon" width={34} height={34} />

        {/* Teks di bawah */}
        <span style={{ fontSize: "14px", color: "#E4FF00" }}>{text}</span>
      </div>
    </a>
  );
}
