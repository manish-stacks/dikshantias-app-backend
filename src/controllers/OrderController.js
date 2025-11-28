"use strict";

const { Order } = require("../models");
const razorpay = require("../config/razorpay");
const redis = require("../config/redis");

class OrderController {

  // CREATE RAZORPAY ORDER
  static async createOrder(req, res) {
    try {
      const {
        userId,
        type,          // batch / test
        itemId,
        amount,
        gst = 0,
        couponCode
      } = req.body;

      if (!userId || !type || !itemId || !amount) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      let discount = 0;
      let couponSnapshot = {
        couponId: null,
        couponCode: null,
        couponDiscount: null,
        couponDiscountType: null
      };

     
      if (couponCode) {
        const coupon = await Coupon.findOne({
          where: { code: couponCode.toUpperCase() }
        });

        if (!coupon)
          return res.status(404).json({ message: "Invalid coupon code" });

      
        const now = new Date();
        if (now > coupon.validTill) {
          return res.status(400).json({ message: "Coupon expired" });
        }

       
        couponSnapshot = {
          couponId: coupon.id,
          couponCode: coupon.code,
          couponDiscount: coupon.discount,
          couponDiscountType: coupon.discountType
        };

       
        if (coupon.discountType === "flat") {
          discount = coupon.discount;
        }

        if (coupon.discountType === "percentage") {
          discount = (amount * coupon.discount) / 100;

          if (coupon.maxDiscount && discount > coupon.maxDiscount) {
            discount = coupon.maxDiscount;
          }
        }
      }

      const totalAmount = amount - discount + gst;

      const razorOrder = await razorpay.orders.create({
        amount: Math.round(totalAmount * 100), 
        currency: "INR",
        receipt: `order_${Date.now()}`
      });

      const newOrder = await Order.create({
        userId,
        type,
        itemId,
        amount,
        discount,
        gst,
        totalAmount,
        razorpayOrderId: razorOrder.id,
        status: "pending",
        // coupon snapshot
        couponId: couponSnapshot.couponId,
        couponCode: couponSnapshot.couponCode,
        couponDiscount: couponSnapshot.couponDiscount,
        couponDiscountType: couponSnapshot.couponDiscountType,

        accessValidityDays: req.body.accessValidityDays || null,
        enrollmentStatus: "active"
      });

      await redis.del(`orders:${userId}`);
      return res.json({
        success: true,
        message: "Order created successfully",
        razorOrder,
        order: newOrder
      });

    } catch (error) {
      console.log("ORDER CREATE ERROR:", error);
      return res.status(500).json({
        message: "Order creation failed",
        error
      });
    }
  }

  // VERIFY PAYMENT
  static async verifyPayment(req, res) {
    try {
      const {
        razorpayOrderId,
        razorpayPaymentId,
        razorpaySignature
      } = req.body;

      const order = await Order.findOne({ where: { razorpayOrderId } });

      if (!order)
        return res.status(404).json({ message: "Order not found" });

      await order.update({
        razorpayPaymentId,
        razorpaySignature,
        status: "success",
        paymentDate: new Date()
      });

      await redis.del(`orders:${order.userId}`);

      return res.json({ success: true, message: "Payment verified", order });

    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Payment verification failed", e });
    }
  }

  // USER ORDERS
  static async userOrders(req, res) {
    try {
      const userId = req.params.userId;
      const cacheKey = `orders:${userId}`;

      const cache = await redis.get(cacheKey);
      if (cache) return res.json(JSON.parse(cache));

      const orders = await Order.findAll({ where: { userId } });

      await redis.set(cacheKey, JSON.stringify(orders), "EX", 60);

      return res.json(orders);

    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Error fetching orders", e });
    }
  }

  // ALL ORDERS (ADMIN)
  static async allOrders(req, res) {
    try {
      const orders = await Order.findAll();

      return res.json(orders);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Error fetching all orders", e });
    }
  }

  // GET ORDER BY ID
  static async getOrderById(req, res) {
    try {
      const orderId = req.params.orderId;
      const order = await Order.findByPk(orderId);

      if (!order)
        return res.status(404).json({ message: "Order not found" });

      return res.json(order);

    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Error fetching order", e });
    }
  }

  // DELETE ORDER
  static async deleteOrder(req, res) {
    try {
      const orderId = req.params.orderId;
      const order = await Order.findByPk(orderId);

      if (!order)
        return res.status(404).json({ message: "Order not found" });

      await order.destroy();

      return res.json({ success: true, message: "Order deleted" });

    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Error deleting order", e });
    }
  }

}

module.exports = OrderController;
