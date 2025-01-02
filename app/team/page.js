"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Instagram, X, YouTube } from "@mui/icons-material";
import Link from "next/link";
import HeaderTitle from "@/components/HeaderTitle";
import Disclaimer from "@/components/disclaimer";
import CardPlayer from "@/components/CardPlayer";

const PlayersComponent = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch("/api/player");
        const data = await response.json();
        console.log(data); // Debugging: Periksa data dari API

        // Pastikan data.players ada dan adalah array
        if (Array.isArray(data.players)) {
          setPlayers(data.players);
        } else if (Array.isArray(data)) {
          setPlayers(data); // Jika API langsung mengembalikan array pemain
        } else {
          throw new Error("Data pemain tidak valid");
        }
      } catch (error) {
        console.error("Error fetching players:", error);
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
    <div className="flex flex-col">
      <HeaderTitle title="TEAM" />
      <Disclaimer
        text="The Paper Rex VALORANT Team features some of the most celebrated players since the VCTs inception.
Despite the emergence of younger raw talents, our roster remains competitive while being one of the longest-standing rosters in VCT.
In 2024, the team triumphed as Champions of VCT Pacific Stage 1 and secured a spot on the podium at VCT Masters Madrid. As the road to Champions gets tougher each year, the team continues to uphold the same ideologies as always; working hard and playing harder."
      />
      {/* Layout */}
      <div className="flex flex-wrap gap-4 min-h-screen">
        {players.map((item) => (
          <CardPlayer
            key={item.id}
            profilePictureUrl={item.profilePictureUrl}
            firstName={item.firstName}
            lastName={item.lastName}
            instagram={item.instagram}
            x={item.x}
            youtube={item.youtube}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayersComponent;
