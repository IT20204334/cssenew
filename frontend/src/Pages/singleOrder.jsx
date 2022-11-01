import React, { useState, useEffect } from "react";
import "./order.css";
import {
  Button,
  DatePicker,
  Input,
  InputNumber,
  message,
  Card,
  Typography,
  Col,
  Row,
  size
} from "antd";
import useRequest from "../Services/RequestContext";
import { useParams } from "react-router-dom";

const SingleOrder = () => {
  const { request } = useRequest();
  const { Text } = Typography;
  const { id } = useParams();
  const [order, setOrder] = useState();

  const getOrder = async () => {
    try {
      const res = await request.get(`order/${id}`);
      if (res.status === 200) {
        setOrder(res.data);
      }
    } catch (e) {
      console.log("error adding data", e);
    }
  };
  useEffect(() => {
    getOrder();
  });

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {order && (
          <Card
            className="box"
            title="View Single Order"
            bordered={false}
            bodyStyle={{ fontSize: 20 }}
            headStyle={{ fontSize: 28, textAlign: "center", margin: 70 }}
          >
            <Row gutter={[24, 24]}>
              <Col span={12}>
                <Text>Meterials : {order.materials}</Text>
              </Col>
              <Col span={12}>
                <Text>Suppliers : {order.supplier}</Text>
              </Col>
              <Col span={12}>
                <Text>Delivery Site : {order.deliverySite}}</Text>
              </Col>
              <Col span={12}>
                <Text>Delivery Date : {order.deliveryDate}</Text>
              </Col>
              <Col span={12}>
                <Text>Quantity : {order.quantity}</Text>
              </Col>
            </Row>
          </Card>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: 35
        }}
      >
        <div>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundClor: "blue", size: "large" }}
          >
            Accept
          </Button>
        </div>
        <div style={{ marginLeft: "30px" }}>
          <Button type="primary" htmlType="submit" danger>
            Decline
          </Button>
        </div>
      </div>
    </>
  );
};
export default SingleOrder;
