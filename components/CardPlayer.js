import Image from "next/image";
import { Instagram, X, YouTube } from "@mui/icons-material";
import Link from "next/link";

export default function CardPlayer({
  profilePictureUrl,
  firstName,
  lastName,
  instagram,
  x,
  youtube,
}) {
  return (
    <div className="border-2 bg-secondary p-4 rounded-lg w-[160px] h-[240px] sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[360px] lg:w-[300px] lg:h-[450px] xl:w-[400px] xl:h-[600px]">
      {/* Image */}
      <div className="relative w-full h-[60%]">
        {profilePictureUrl ? (
          <Image
            src={profilePictureUrl}
            alt={`${firstName} ${lastName}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        ) : (
          <div className="bg-gray-300 rounded-lg w-full h-full flex items-center justify-center"> {/* Fallback if no image */}
            <span className="text-gray-600">No Image</span>
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="my-4 text-left text-xs md:text-sm lg:text-lg font-semibold">
        {firstName} {lastName}
      </h3>

      {/* Social Media */}
      <div className="flex items-center gap-3 mt-2">
        {instagram && (
          <Link href={instagram} passHref>
            <Instagram sx={{ fontSize: "22px" }} />
          </Link>
        )}
        {x && (
          <Link href={x} passHref>
            <X sx={{ fontSize: "22px" }} />
          </Link>
        )}
        {youtube && (
          <Link href={youtube} passHref>
            <YouTube sx={{ fontSize: "22px" }} />
          </Link>
        )}
      </div>
    </div>
  );
}
