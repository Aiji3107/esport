import Image from "next/image";
import PhotoOne from "@/public/image/2022-masters-grand-finals-crowd.jpg";

export default function MatchTodayCard({ MTImg, title, body }) {
  const style = {
    bgcolor: "#000066",
    headercolor: "#FF0066",
    yellowcolor: "#E4FF00",
    linecolor: "#0000A6",
  };

  return (
    <div
      className="rounded-xl p-0 mb-5 shadow-lg"
      style={{ backgroundColor: style.bgcolor }}
    >
      {/* Card Header with Image (frameless) */}
      <div className="relative w-full h-36 overflow-hidden rounded-t-xl">
        <Image
          src={MTImg}
          alt="Match Photo"
          className="object-cover w-full h-full"
          style={{
            borderTopLeftRadius: "1rem", // Apply rounded-xl only to top-left
            borderTopRightRadius: "1rem", // Apply rounded-xl only to top-right
            borderBottomLeftRadius: "0", // No rounded corners at the bottom
            borderBottomRightRadius: "0", // No rounded corners at the bottom
          }}
        />
      </div>

      {/* Match Highlights Section */}
      <div className="flex flex-col items-start rounded-xl p-2">
        <p
          className="text-lg  font-bold mb-1"
          style={{ color: style.headercolor }}
        >
          {title}
        </p>
        <p className="text-sm " style={{ color: style.yellowcolor }}>
          {body}
        </p>
      </div>
    </div>
  );
}
