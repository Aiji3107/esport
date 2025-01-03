// app/api/player/route.js

import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // mengambil data artikel dari database
    const article = await prisma.article.findMany()

    // jika data artikel kosong atau null
    if (!article || article.length === 0 ) {
      throw new Error("No articles found");
    }
    // Jika data di temukan
    return new Response(JSON.stringify(article), { status: 200 });
  } catch (err) {
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
  }};