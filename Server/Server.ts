import express from 'express'
import cors from 'cors'
import Router from './Router'
import dotenv from 'dotenv'

dotenv.config()

const corsConfig = {
    origin: process.env.SOURCEPORT ?? 'http://localhost:3000',
    credentials: true
}

export const bootServer = (port: number) => {
    const app = express()
    app.use(cors(corsConfig))
    app.use(express.json())

    app.use(Router)
    app.listen(port, ()=> {
        console.log(`server running on port ${port}`)
    })

    return app
}