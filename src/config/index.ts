import dotenv from "dotenv";
dotenv.config();

const configuration = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    OPEN_CAGE_DATA_KEY:process.env.OPEN_CAGE_DATA_KEY,
    PM2_PUBLIC_KEY:process.env.PM2_PUBLIC_KEY,
    PM2_SECRET_KEY:process.env.PM2_SECRET_KEY,
    REDIS_PORT:process.env.REDIS_PORT,
}

export default configuration