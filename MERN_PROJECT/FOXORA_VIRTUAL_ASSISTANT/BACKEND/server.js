import express from 'express'
import dotenv from 'dotenv'
import ConnectDB from './utils/DB.js'
import cors from 'cors'
dotenv.config({
    path:'./.env'
})
const myport=process.env.PORT||3000

const app=express()

app.use(express.json())

app.use(cors({
    origin:"localhost:5173",
    credentials:true
}))

app.listen(myport,(req,res)=>{
    ConnectDB()
    console.log(`Server running at ${myport}`)
})
