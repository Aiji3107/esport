
import { motion } from "motion";
import Image from "next/image";
import Link from "next/link";

export default function CardNews({ imageSrc, date, title, content, link }) {
  const formatDate = new Date(date).toLocaleDateString();
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Gambar */}
      <Image
        className="w-[340px] h-[190px] bg-white object-cover md:w-[720px] md:h-[406px] lg:w-[1920px] lg:h-[1085px]"
        alt="gambar"
        width={2048}
        height={1366}
        src={imageSrc}
      />
      <div className="text-wrap">
        {/* Date */}
        <h1 className="text-left text-xs">{formatDate}</h1>
        <div className="text-pretty">
          {/* title */}
          <h1 className="text-center text-accent text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold my-2">
            {title}
          </h1>

          {/* Content */}
          <h3 className="text-balance text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            {content}
            <span> </span>
            {/* ReadMore */}
            <Link className="text-red-600" href={link || "#"}>
              ReadMore...
            </Link>
          </h3>
        </div>

        <div className="p-2" />
      </div>
    </div>
  );
}
