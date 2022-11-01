import React from "react";
import "./navbar.css";
import { Button } from "antd";
import {
  UserOutlined,
  CarryOutOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="navBarContainer">
      <div>
        <Button
          type="primary"
          icon={<HomeOutlined />}
          onClick={() => navigate("/")}
        >
          Home
        </Button>
      </div>
      <div>
        <Button
          type="primary"
          icon={<CarryOutOutlined />}
          onClick={() => navigate("/")}
        >
          Order
        </Button>
      </div>
      <div>
        <Button type="primary" icon={<UserOutlined />}></Button>
      </div>
    </div>
  );
};

export default Nav;
