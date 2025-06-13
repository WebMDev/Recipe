const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cloudinary = require('../utils/cloudinary'); //config file

// Ensure uploads folder exists
const uploads = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploads)) {
    fs.mkdirSync(uploads, { recursive: true }); // Create uploads folder if it doesn't exist
    console.log('Uploads folder created!');
}

// Disk storage 
const storage = multer.diskStorage({
    destination: (req, file, cd) => {
        cd(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const baseName = path.basename(file.originalname, ext); 
        const uniqueName = `${baseName}-${Date.now()}${ext}`;
        cb(null, uniqueName);
    },
});

const upload = multer({ storage });

// Middleware to upload to Cloudinary
const uploadToCloudinary = async (req, res, next) => {
    if (!req.file) return next();

    const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);

    try {
        const result = await cloudinary.uploader.upload(filePath, 
        {
            folder: 'your-folder-name', //  optional
        });
        
        // Delete local file after upload 
        fs.unlinkSync(filePath);

        // Attach Cloudinary URL to request object 
        req.file.cloudinaryUrl = result.secure_url;
        next();
    } catch (err) {
        console.error('Cloudinary Upload Error:', err);
        return res.status(500).json({ error: 'cloudinary upload failed' });
    }
};

module.exports = {
    upload, 
    uploadToCloudinary,
};