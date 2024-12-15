import { Group, HowToVote, Info, Newspaper } from "@mui/icons-material";
export default function BigButton({ text, icon, href }) {
  const iconMap = {
    Newspaper: Newspaper,
    HowToVote: HowToVote,
    Group: Group,
    Info: Info,
  };
  const Icon = iconMap[icon]; // Ambil ikon berdasarkan nama string

  if (!Icon) {
    // Tangani jika ikon tidak ditemukan
    return <div>Icon not found</div>;
  }

  return (
    <a href={href} className="block" style={{ textDecoration: "none" }}>
      <div
        style={{
          width: "80px",
          height: "80px",
          color: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "8px",
          cursor: "pointer",
          backgroundColor: "#000066",
          textAlign: "center",
        }}
        className="shadow-lg"
      >
        {/* Render Icon */}
        <Icon className="w-[45px] h-[45px] text-accent" />

        {/* Teks di bawah */}
        <span style={{ fontSize: "14px", color: "#E4FF00" }}>{text}</span>
      </div>
    </a>
  );
}
