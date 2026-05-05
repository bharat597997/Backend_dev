import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
dotenv.config({});
import userRoutes from './routes/user.routes.js';


const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5173',
    Credential: true,
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

//apis
app.use("/api/v1/user", userRoutes);



app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})