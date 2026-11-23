import express from 'express'
import dotenv from 'dotenv'
import simpleRoute from './routes/simpleRoute.js'
import productsRoute from './routes/productsRoute.js'



dotenv.config()

const app=express()

app.use(simpleRoute)

app.use(productsRoute)

app.listen(process.env.PORT,()=>{
    console.log('Server running on:http://localhost:3000')
})