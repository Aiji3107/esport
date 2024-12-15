"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { Instagram, X, YouTube } from "@mui/icons-material";
import Link from "next/link";

const PlayersComponent = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch("/api/player");
        const data = await response.json();
        setPlayers(data.players);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlayers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="players-list">
      {players.map((player, index) => (
        <div key={index} className="mb-4">
          <div className="border-2 w-[160px] h-[240px] aspect-w-2 aspect-h-3 sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[360px] lg:w-[300px] lg:h-[450px] xl:w-[400px] xl:h-[600px] bg-secondary mr-4">
            {/* Image */}
            <Image
              src={player.imageUrl || "/default-image.jpg"} // Pastikan URL gambar valid
              alt={player.firstName}
              width={400}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name */}
          <h3 className="mt-2 text-xs md:text-sm lg:text-lg">
            {player.firstName} {player.lastName}
          </h3>

          {/* Social Media */}
          <div className="flex items-center gap-[5px]">
            <Link href={player.socialMediaLinks.instagram}>
              <Instagram
                sx={{ fontSize: { xs: "14px", md: "18px", lg: "22px" } }}
              />
            </Link>
            <Link href={player.socialMediaLinks.x}>
              <X sx={{ fontSize: { xs: "14px", md: "18px", lg: "22px" } }} />
            </Link>
            <Link href={player.socialMediaLinks.youtube}>
              <YouTube
                sx={{ fontSize: { xs: "22px", md: "18px", lg: "22px" } }}
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayersComponent;
