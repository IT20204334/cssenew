import React from "react";
import "./navbar.css";
import { Button } from "antd";
import {UserOutlined} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
    return (
        <div className="navBarContainer">
            <div>
                <Button
                    style={{marginLeft:-250}}
                type="primary"
                onClick={() => navigate("/")}
                >Home
                </Button>
            </div>
            <div>
                <Button
                    style={{marginLeft:-800}}
                    type="primary"
                    icon={<UserOutlined />}
                    onClick={() => navigate("/wel")}
                    >
                        Order
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Nav;
