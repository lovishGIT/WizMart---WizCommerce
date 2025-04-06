import { v2 as cloudinary } from "cloudinary";
import env from "./validateEnv.config.js";

cloudinary.config({
    cloud_name: env.CLOUDINARY_NAME,
    api_key: env.CLOUDINARY_API_KEY,
    api_secret: env.CLOUDINARY_API_SECRET,
});

export default cloudinary;