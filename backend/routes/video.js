import express from 'express'
import { videoUpload } from '../middleware/videoUpload.js'
import { getAllVideos, videoController } from '../controller/video-controller.js'

const router = express.Router()

router.post('/upload', videoUpload.single('video'), videoController)

router.get('/videos', getAllVideos)

export default router