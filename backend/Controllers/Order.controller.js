const order = require("../Models/Order");

exports.createOrder = async (req, res) => {
  try {
    const Order = new order(req.body);
    const savedOrder = await Order.save();
    if (savedOrder) {
      res.status(201).send({ message: "success!", data: savedOrder });
    } else {
      res.status(400).send({ message: "failed!", data: savedOrder });
    }
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const Order = await order.findById(req.params.id);
    res.json(Order);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const Order = await order.find({});
    res.json(Order);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const data = req.body;
    if (data) {
      const updateOrder = await order.updateOne(
        { _id: req.params.id },
        { ...data }
      );
      console.log("updated ", updateOrder);
      res.status(200).send({ message: "success", data: updateOrder });
    } else {
      res.status(204).send({ message: "update data can not be empty!" });
    }
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const updateOrderStatus = await order.updateOne(
      { _id: req.params.id },
      {
        status: req.body.status,
        statusUpdateDate: Date.now(),
      }
    );
    console.log("updated ", updateOrderStatus);
    res.status(200).send({ message: "success", data: updateOrderStatus });
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.updateSupplierStatus = async (req, res) => {
  try {
    const updateSupplierStatus = await order.updateOne(
      { _id: req.params.id },
      {
        supplierStatus: req.body.supplierStatus,
        statusUpdateDate: Date.now(),
      }
    );
    console.log("updated ", updateSupplierStatus);
    res.status(200).send({ message: "success", data: updateSupplierStatus });
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const deleteOrder = await order.findByIdAndDelete(req.params.id);
    res.json(deleteOrder);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};
