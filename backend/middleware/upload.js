import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "mini_mart_products", 
    format: async () => "png",
    public_id: (req, file) => file.originalname.split(".")[0], 
  },
});

const upload = multer({ storage });

export default upload;
