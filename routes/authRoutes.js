import express from "express";
import { loginController, registerController } from "../controllers/authController.js";
import rateLimit from "express-rate-limit";

// ip limiter
const limiter = rateLimit({
    windowMs: 15*60*1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders:false
})
// router object
const router = express.Router()

// routes


// REGISTER || POST
router.post('/register', limiter, registerController);

// LOGIN || POST
router.post('/login', limiter, loginController);

// export
export default router