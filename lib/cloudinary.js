const cloudinary = require('cloudinary').v2;
require('dotenv').config(); // Load variabel lingkungan dari .env

cloudinary.config({
    cloudinary_url: process.env.CLOUDINARY_URL, // Menggunakan URL langsung
});

// console.log("Cloudinary Config:", {
//     cloudinary_url: process.env.CLOUDINARY_URL, // Menggunakan URL langsung
//   });

module.exports = cloudinary;