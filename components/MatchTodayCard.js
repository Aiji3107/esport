import Image from "next/image";

export default function MatchTodayCard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#000066",
        borderRadius: "6px",
        height: "203px",
        width: "240px",
        marginRight: "20px", // Memberikan jarak antar kartu
      }}
    >
      <Image
        alt="image"
        src="/path/to/your/image.jpg"
        width={100}
        height={100}
      />
      <div className="match-today-card__info">
        <h2 className="match-today-card__title">Match Today</h2>
        <p className="match-today-card__description">
          This is a match today card
        </p>
      </div>
    </div>
  );
}
