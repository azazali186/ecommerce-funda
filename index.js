import Express from "express";
import mongoose from "mongoose";
import DotEnv from "dotenv"

import AuthRoutes from './src/routes/AuthRoutes.js'

DotEnv.config()

const app = Express()
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("DB Connected")
}).catch((e)=>{
    console.log("DB Connection error ",e)
})
app.use('/api/auth', AuthRoutes)

app.listen(process.env.PORT||5000,() => {
    console.log('app running on port ', process.env.PORT||5000)
})

