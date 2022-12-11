import express from 'express'
import billandingController from '../../controllers/billandings'

const router = express.Router()

router.get('/', billandingController.fetchAllBillanding)

export default router