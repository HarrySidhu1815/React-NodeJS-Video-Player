import multer from 'multer'
import path from 'path'
import uuid from 'uuid'

const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        if(file.fieldname === 'video'){
            const rootDir = path.dirname(main.filename)
            cb(null, path.join(rootDir, 'public').concat('videos'))
        }
    },
    filename: (req, file, cb) => {
        const videoExt = file.mimetype.split('/')[1]
        const id = uuid()
        cb(null, "video_" + id + '.' + videoExt)
    }
})