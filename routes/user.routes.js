import express from "express";
import { login,register,updateProfile } from "../controller/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
const router = express.Router();
