import React from "react";
import "./order.css";
import { Button, DatePicker, Form, Input, InputNumber, message } from "antd";
import FormItem from "antd/lib/form/FormItem";

const singleOrder = () => {
  return (
    <div>
      <title>View Single Order</title>
      <div style={{ width: 700 }}>
        <Form layout="vertical">
          <Form.Item
            name="meterials"
            label="Meterials"
            rules={[{ required: true, message: "Please input Meterials!" }]}
          >
            <Input placeHolder="Enter Meterials" />
          </Form.Item>

          <Form.Item
            name="suppliers"
            label="Suppliers"
            rules={[
              { required: true, message: "Please input your Suppliers!" }
            ]}
          >
            <Input placeHolder="Enter Suppliers" />
          </Form.Item>

          <Form.Item
            name="deliverySite"
            label="Delivery Site"
            rules={[{ required: true, message: "Please input Delivery Site!" }]}
          >
            <Input placeHolder="Enter Delivery Site" />
          </Form.Item>

          <Form.Item
            name="deliveryDate"
            label="Delivery Date"
            rules={[
              { required: true, message: "Please input your Join Date!" }
            ]}
          >
            <DatePicker placeHolder="Enter Date" style={{ width: "50%" }} />
          </Form.Item>

          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[{ required: true, message: "Please input Quantity!" }]}
          >
            <InputNumber min={1} max={10} />
          </Form.Item>

          <FormItem></FormItem>
          <Form.Item>
            <div className="accbtn">
              <Button type="primary" htmlType="submit">
                Accept
              </Button>
            </div>
          </Form.Item>

          <Form.Item>
            <div className="decbtn">
              <Button type="primary" htmlType="submit">
                Decline
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default singleOrder;