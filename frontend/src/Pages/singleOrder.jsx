import React, { useState, useEffect } from "react";
import "./order.css";
import { Button, Card, Typography, Col, Row, Modal } from "antd";
import useRequest from "../Services/RequestContext";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const SingleOrder = () => {
  const { request } = useRequest();
  const { Text } = Typography;
  const { id } = useParams();
  const [order, setOrder] = useState();
  const [reason, setReason] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    declineOrder();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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

  const acceptOrder = async () => {
    try {
      const orderObj = {
        ...order,
        status: "Approved",
        statusUpdateDate: new Date(),
      };

      const res = await request.patch(`order/${id}`, orderObj);

      console.log(orderObj);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Successful",
          text: "Order Successfully Accepted !",
          confirmButtonColor: "#1890ff",
        });
      }
    } catch (e) {
      console.log("error updating data", e);
    }
  };

  const declineOrder = async () => {
    try {
      const orderObj = {
        ...order,
        status: "Declined",
        statusUpdateDate: new Date(),
        declineReason: reason,
      };

      const res = await request.put(`order/${id}`, orderObj);

      console.log(orderObj);

      if (res.status === 200) {
        Swal.fire({
          icon: "error",
          title: "Successful",
          text: "Order Successfully Declined !",
          confirmButtonColor: "#1890ff",
        });
      }
    } catch (e) {
      console.log("error updating data", e);
    }
  };

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
                <Text>Materials : {order.materials}</Text>
              </Col>
              <Col span={12}>
                <Text>Suppliers : {order.supplier}</Text>
              </Col>
              <Col span={12}>
                <Text>Delivery Site : {order.deliverySite}</Text>
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
          margin: 35,
        }}
      >
        <div>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundClor: "blue", size: "large" }}
            onClick={acceptOrder}
          >
            Accept
          </Button>
        </div>
        <div style={{ marginLeft: "30px" }}>
          <Button type="primary" htmlType="submit" danger onClick={showModal}>
            Decline
          </Button>
        </div>
      </div>
      <Modal
        title="Decline Reason"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <select
          name="declineReason"
          id="declineReason"
          onChange={(e) => {
            setReason(e.target.value);
          }}
        >
          <option value="" disabled>
            Reason
          </option>
          <option value="Insufficient Budget">Insufficient Budget</option>
          <option value="Invalid Materials">Invalid Materials</option>
          <option value="Unnecessary Materials">Unnecessary Materials</option>
          <option value="Quotation Issues">Quotation Issues</option>
        </select>
      </Modal>
    </>
  );
};
export default SingleOrder;
