const mongoose = require('mongoose')

const customersSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    }
})
const Customers = mongoose.model('Customers', customersSchema)

module.exports = Customers;

//customer_admin / mUodOhU7VbkBhLWA