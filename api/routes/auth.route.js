import express from "express";
import { signup, signin, google } from "../Controllers/auth.controllers.js";

const auth = express.Router();

auth.post("/signup", signup);
auth.post("/signin", signin);
auth.post("/google", google);
export default auth;
