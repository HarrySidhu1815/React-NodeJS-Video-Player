import mongoose from 'mongoose'

export const dbConnection = async() => {
    mongoose.set('strictQuery', true)
    await mongoose.connect(process.env.MONGO_URL)
    .then(()=> {
        console.log('Mongo DB Connected')
    }).catch((error)=>{
        console.log(error)
    })
}
