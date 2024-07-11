import { Video } from "../model/video.model.js"

export const videoController = async (req, res) => {
    const {title, description} = req.body
    const videoPath = req.file.path

    const video = new Video({
        title,
        description,
        filename: req.file.filename,
        videoUrl: videoPath
    })

    try {
        await video.save()
        res.status(200).json({
            messsage: 'Video successfully uploaded',
            video
        })
    } catch (error) {
        res.json(400).json({
            message: 'Video upload failed'
        })
    }
}

export const getAllVideos = async (req, res) => {
    try {
        const videos = await Video.find({})
        res.status(200).json({videos})
    } catch (error) {
        
    }
}