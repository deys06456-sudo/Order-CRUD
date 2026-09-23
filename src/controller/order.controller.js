const Order = require("../model/order.model");

class OrderController {
    async creatOrder(req, res) {
        try {
            const { customer, products, shippingAddress, payment, orderStatus } = req.body;
            if (!customer || !products || !shippingAddress || !payment || !orderStatus) {
                return res.status(400).json({
                    success: false,
                    message: "All fields are required"
                });
            }

            //Product must be an array
            if (!Array.isArray(products) || products.length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Product must be a non-empty array"
                });
            }

            // Creat Order 
            const orderData = new Order({
               customer, products, shippingAddress, payment, orderStatus
            });

            const data = await orderData.save();

            return res.status(201).json({
                success: true,
                message: "Order created successfully",
                data: data
            });

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }





    // GET ALL ORDER 
    async getOrders(req, res) {
        try {
            const Orders = await Order.find()
                .sort({ creatAt: - 1 });

            return res.status(200).json({
                success: true,
                message: "Orders fetched successfully",
                total: Orders.length,
                data: Orders
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }





    //GET SINGLE ORDER
    async getSingleOrder(req, res) {
        try {
            const id = req.params.id;
            const order = await Order.findById(id);

            if (!Order) {
                return res.status(404).json({
                    success: false,
                    message: "Order not found"
                });
            }

            return res.status(200).json({
                success: true,
                message: "Order fetch succrssfully",
                data: order
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }





    //UPDATE ORDER 
    async updateOrder(req, res) {
        try {
            const id = req.params.id;
            const updateOrder = await Order.findByIdAndUpdate(
                id,
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            );

            if (!updateOrder) {
                return res.status(404).json({
                    success: false,
                    message: "Order not found"
                });
            }

            return res.status(200).json({
                success: true,
                message: "Order updated succrssfully",
                data: updateOrder
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }





    //DELETE ORDER
    async deleteOrder(req, res) {
        try {
            const id = req.params.id;
            const deleteOrder = await Order.findByIdAndDelete(id);

            if (!deleteOrder) {
                return res.status(404).json ({
                    success: false,
                    message: "Order not found"
                });
            }

            return res.status(200).json({
                success: true,
                message: "Order deleted Successfully"
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

}






module.exports = new OrderController();












