import express from 'express'
import simpleController from '../controllers/simpleController.js'


const simpleRoute=express.Router()
simpleRoute.get('/',simpleController.hello);

export default simpleRoute