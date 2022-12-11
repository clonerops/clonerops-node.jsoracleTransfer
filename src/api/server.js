import express from 'express'
import fs from 'fs'
import path from 'path'
import bodyParser from 'body-parser'
import api from './routes'
import helmet from 'helmet'
import cors from 'cors'
import config from 'config'
import morgan from 'morgan'

const app = express()

const MORGAN_CONFIG = {
    stream: fs.createWriteStream(path.join(__dirname, '../../log', 'access.log'), { flags: 'a' }),
    interval: '3d'
}

export const runServer = () => {
    // Express Middleware
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(morgan(config.get('morgan_log_format.format'), MORGAN_CONFIG));
    app.use(morgan('dev'));
    app.use(cors())
    app.use(helmet())

    // Routes
    app.use('/api', api)

    const port = process.env.PORT || 8000
    app.listen(port, () =>
        console.log(`Server is up on port: ${port} pid: ${process.pid}`))

}

