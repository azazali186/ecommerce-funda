import express from 'express';
import {LoginController } from '../controllers/AuthController.js'
const router = express.Router();


router.post('/login', LoginController)


export default router