// app/api/player/route.js
import prisma from "@/lib/prisma";

export async function GET(req) {
  try {
    const players = await prisma.player.findMany();
    console.log(players); // Debugging: Cek data dari database
    return new Response(JSON.stringify({ players }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching players:", error); // Debugging: Log error
    return new Response(JSON.stringify({ error: "Error fetching players" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
