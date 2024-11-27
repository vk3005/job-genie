import express from 'express';
import userAuth from '../middlewares/authMiddleware.js';
import { createJobContoller, deleteJobController, getAllJobsController, jobStatsController, updateJobController } from '../controllers/jobsController.js';

const router = express.Router();

//routes
//CREATE JOB|| POST
router.post("/create-job", userAuth,createJobContoller)

//GET ALL JOBS|| GET
router.get("/get-job", userAuth , getAllJobsController)
   





//UPDATE JOB || PATCH
router.patch("/update-job/:id",userAuth , updateJobController)

//DELETE JOB || PATCH
router.delete("/delete-job/:id",userAuth , deleteJobController)
export default router;

//JOB STATS FILTER || GET

router.get("/job-stats", userAuth , jobStatsController)