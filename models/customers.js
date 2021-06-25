const mongoose = require('mongoose')

const customersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})
const Customers = mongoose.model('Customers', customersSchema)

module.exports = Customers;

//customer_admin / mUodOhU7VbkBhLWA