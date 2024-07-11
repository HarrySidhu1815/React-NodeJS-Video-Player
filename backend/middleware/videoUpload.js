import multer from 'multer'
import path from 'path'
import { v4 as uuid } from 'uuid'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        if(file.fieldname === 'video'){
            const rootDir = __dirname
            cb(null, path.join(rootDir,'..', 'public','videos'))
        }
    },
    filename: (req, file, cb) => {
        const videoExt = file.mimetype.split('/')[1]
        const id = uuid()
        cb(null, "video_" + id + '.' + videoExt)
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'video/mp4'){
        cb(null, true)
    }else{
        cb(null, false)
    }
}

export const videoUpload = multer({storage, fileFilter})