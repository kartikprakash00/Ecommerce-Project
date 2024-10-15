import express from "express";
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe, verifyRazorpay, placeOrderCard } from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router()

//Admin Features routes
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// Payment features routes
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/card-payment', authUser, placeOrderCard)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)

// User features routes
orderRouter.post('/userorders', authUser, userOrders)

// Verify Payment
orderRouter.post('/verifyStripe', authUser, verifyStripe)
// orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay)

export default orderRouter