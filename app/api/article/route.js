// app/api/article/route.js

import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Mengambil data pemain dari database
    const players = await prisma.player.findMany();

    // Jika data pemain kosong atau null
    if (!players || players.length === 0) {
      throw new Error("No players found");
    }

    // Jika data ditemukan, kirimkan response dengan data pemain
    return new Response(JSON.stringify(players), { status: 200 });
  } catch (error) {
    // Menangani error dan mengirimkan response dengan status 500
    console.error("Error fetching players:", error);
    return new Response(
      JSON.stringify({
        error: "Error fetching players",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
