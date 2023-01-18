import { Router } from "express";
const router = Router();

import { getVideos, createVideo, updateVideo, getVideo, deleteVideo } from "../controllers/video.controller";
//import * as videoCtrl from '../controllers/video.controller';


router.get('/videos', getVideos);
router.get('/videos/:id', getVideo);
router.post('/videos',createVideo);
router.delete('/video/:id',deleteVideo);
router.put('/video/:id',updateVideo);

export default router;