import mongoose from 'mongoose'

const VideoSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        requied: true
    },
    description: {
        type: String,
        trim: true,
    },
    videoUrl: {
        type: String,
        trim: true,
    },
    filename: {
        type: String,
        trim: true,
    },
}, {timestamps: true})

export const Video = mongoose.model('MyVideos', VideoSchema)