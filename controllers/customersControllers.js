const Customers = require("../models/customers");

exports.createCustomer = async (req, res) => {
  try {
    const payload = { ...req.body };
    const customer = new Customers(payload);
    await customer.save();
    res.send(customer);
  } catch (e) {
    res.status(500).send(e);
  }
};
exports.getCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    const customer = await Customers.findById(id);
    if (!customer) {
      return res.status(404).send();
    }
    res.send(customer);
  } catch (e) {
    res.status(500).send(e);
  }
};
exports.allCustomers = async (req,res) => {
    try{
        const customers = await Customers.find({})
        res.send(customers)
    }
    catch(e){
        res.status(500).send()
    }
}

exports.deleteCustomer = async (req, res) => {
    try{
        const id = req.params.id;
        const customer = await Customers.findByIdAndDelete(id);
        if(!customer){
            return res.status(404).send()
        }
        res.send(customer)
    }
    catch(e){
        res.status(500).send()
    }
}
/*
router.get('/customer/:id', customersControllers.getCustomer)
router.post('/customers', customersControllers.allCustomers)
router.delete('/customer/:id', customersControllers.deleteCustomer)
*/
