import express from "express";
import multer from "multer";
import UniversityController from "./controllers/university-controller";


const router = express.Router();
const upload = multer();

// university
router.get('/universities/:id', UniversityController.getUniversityById);
router.post('/universities', UniversityController.createUniversity);


export default router;