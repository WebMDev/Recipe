const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cloudinary = require('../utils/cloudinary'); //config file

// Disk storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    console.log(file);
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext);
    const uniqueName = `${baseName}-${Date.now()}${ext}`;
    cb(null, uniqueName);
  },
});
 
const upload = multer({ storage });
 
// Middleware to upload to Cloudinary
const uploadToCloudinary = async (req, res, next) => {
  console.log(req.file, "jsdj");
 
  if (!req.file) return next();
 
  const filePath = path.join(__dirname, "..", "uploads", req.file.filename);
 
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "your-folder-name", // optional
    });
 
    // Delete local file after upload
    fs.unlinkSync(filePath);
 
    // Attach Cloudinary URL to request object
    req.file.cloudinaryUrl = result.secure_url;
    next();
  } catch (err) {
    console.error("Cloudinary Upload Error:", err);
    return res.status(500).json({ error: "Cloudinary upload failed" });
  }
};

module.exports = {
    upload, 
    uploadToCloudinary,
};