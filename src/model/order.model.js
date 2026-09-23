const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
    {
        customer: {

            name: {
                type: String,
                required: [true, "Customar name is required"],
                trim: true
            },

            email: {
                type: String,
                required: [true, "Customar email is required"],
                trim: true
            },

            phone: {
                type: String,
                required: [true, "Customar phone is required"],
                trim: true
            }

        },



        // ARRAY OF OBJECTS
        products: [
            {
                productName: {
                    type: String,
                    required: [true, "Product name is required"]
                },

                quantity: {
                    type: String,
                    required: [true, "Quantity is required"],
                    min: 1
                },

                price: {
                    type: String,
                    required: [true, "Price name is required"]
                }
            }
        ],



        //NESTED OBJECT 
        shippingAddress: {
            city: {
                type: String,
                required: [true, "City is reqired"]
            },

            state: {
                type: String,
                required: [true, "State is reqired"]
            },

            pincode: {
                type: String,
                required: [true, "Pincode is reqired"]
            }

        },



        // NESTED OBJECT
        payment: {

            method: {
                type: String,
                required: [true, "Payment method is required"]
            },

            paymentStatus: {
                type: String,
                required: [true, "Payment status is required"]
            }

        },



        //STRING + ENUM 
        orderStatus: {
            type: String,
            enum: ["pending", "Processing", "Shipped", "Delivered", "Cancelled"],
            default: "pending"
        }
    },{
    timestamps: true
}
);

const OrderModel = mongoose.model("Order", orderSchema);

module.exports = OrderModel;























