import express from 'express'
import customerController from '../../controllers/customer'

const router = express.Router()

router.get('/', customerController.fetchAllBillanding)

export default router