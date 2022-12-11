import express from 'express'
const router =  express.Router()
import { readdirSync } from 'fs';

// imports route
import billandingRouter from './billandings'

// use route
router.use('/billandings', billandingRouter)

readdirSync('src/api/routes').map(async (route) => {
    const {default: handler} = await import(`./${route}`)
    router.use(`/${route.slice(0, -3)}`, handler)

});

export default router