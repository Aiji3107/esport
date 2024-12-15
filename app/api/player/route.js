const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const players = await prisma.player.findMany();
    res.json({ players });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch players" });
  }
});
