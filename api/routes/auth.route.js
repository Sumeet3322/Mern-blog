import express from "express";
import { signup } from "../Controllers/auth.controllers.js";

const auth = express.Router();

auth.post("/signup", signup);

export default auth;
