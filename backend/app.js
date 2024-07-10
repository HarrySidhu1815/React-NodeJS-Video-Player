import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {dbConnection} from './db/dbConnect.js'
import videoRoute from './routes/video.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 8000

//middlewares

app.use(cors())
app.use(express.json())

app.use('/api/video', videoRoute)

const server = () =>{
    dbConnection()
    app.listen(PORT, () => {
        console.log(`Server is listening to ${PORT}`)
    })
}

server()

