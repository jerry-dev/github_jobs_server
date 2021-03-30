import express from 'express';
import githubJobListingsController from '../controllers/get/index.js';

const router = express.Router();

router.get("/", githubJobListingsController.getJobListings);


export default router;