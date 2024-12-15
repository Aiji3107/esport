// app/api/player/route.js
import prisma from "@/lib/prisma";

export async function GET(req) {
  try {
    // Mengambil data pemain dari database menggunakan Prisma
    const players = await prisma.player.findMany();

    // Mengembalikan data pemain dalam format JSON
    return new Response(JSON.stringify(players), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Jika ada error, kirimkan respons dengan status error dan pesan
    return new Response(JSON.stringify({ error: "Error fetching players" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
