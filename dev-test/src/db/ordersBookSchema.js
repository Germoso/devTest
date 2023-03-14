const mongoose = require("mongoose")

//ESQUEMA DE DATOS PARA LA BASE DE DATOS MONGO

const orderBookSchema = new mongoose.Schema({
    table: { type: String, required: true },
    action: { type: String, required: true },
    keys: { type: Array, required: true },
    types: {
        symbol: { type: String, required: true },
        id: { type: String, required: true },
        side: { type: String, required: true },
        size: { type: String, required: true },
        price: { type: String, required: true },
        timestamp: { type: String, required: true },
    },
    filter: { type: Object, required: true },
    data: { type: Array, required: true },
})

const OrderBook = mongoose.models.OrderBook || mongoose.model("OrderBook", orderBookSchema)

module.exports = OrderBook
