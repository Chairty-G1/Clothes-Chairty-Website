const Order = require("../models/orderModel");
const errorHandler = require("../middleware/500");

const allOrders = (req, res) => {
    Order.find({ is_delete: false, active: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            errorHandler(error, req, res);
        });
};

const allOrdersNotActive = (req, res) => {
    Order.find({ is_delete: false, active: false })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            errorHandler(error, req, res);
        });
};

const oneOrderById = async (req, res) => {
    const id = req.params.id;
    const order = await Order.find({ _id: id, is_delete: false, active: true });
    res.json(order);
};

const AllOrderByEmail = async (req, res) => {
    const { email } = req.body;

    const order = await Order.find({ email: email, is_delete: false, active: true });
    res.json(order);
};

const newOrder = async (req, res) => {

    const { order_status, description, number_pieces, address, name, email, phone } = req.body;

    const newOrder = new Order({
        order_status: order_status,
        description: description,
        number_pieces: number_pieces,
        address: address,
        name: name,
        email: email,
        phone: phone,
        available: true,
        active: false
    });

    const order = await newOrder.save();
    res.json(order);
};

const updateOrder = async (req, res) => {
    const orderId = req.params.id;
    const updatedOrderData = req.body;

    const order = await Order.findByIdAndUpdate(orderId, updatedOrderData, { new: true });
    const updatedOrder = await order.save();
    res.json(updatedOrder);
};

const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const updatedOrderData = req.body;

        updatedOrderData.is_delete = true;

        const order = await Order.findByIdAndUpdate(orderId, updatedOrderData, {
            new: true,
        });

        const updatedOrder = await order.save();

        res.json(updatedOrder);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update Order' });
    }
};


module.exports = {
    allOrders,
    allOrdersNotActive,
    oneOrderById,
    AllOrderByEmail,
    newOrder,
    updateOrder,
    deleteOrder,
}; 