import  express from "express";
import dotenv from 'dotenv'
import { connectDB } from "./config/db";

import productsRoutes from './routes/productsRoutes'
import categoryRoutes from './routes/categoryRoutes'
import supplierRoutes from './routes/supplierRoutes'
import stockRoutes from './routes/stockRoutes'

dotenv.config()

connectDB()

const app = express()
app.use(express.json())
//Routes
app.use('/api/category', categoryRoutes)
app.use('/api/products', productsRoutes)
app.use('/api/supplier', supplierRoutes)
app.use('/api/stock', stockRoutes)



export default app;