import React from "react";
import { Button, Table, Input, Popconfirm, message, Typography } from "antd";
import moment from "moment";
import { useState } from "react";

import useRequest from "../../services/RequestContext";

const View = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { request } = useRequest();
  const fetchView = async () => {
    setLoading(true);
    try {
      const res = await request.get("Order");
      if (res.status === 200) {
        //console.log('data', res.data);
        setData(res.data);
      }
    } catch (e) {
      console.log("error fetching View!", e);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "Meterials",
      dataIndex: "meterials",
      key: "meterials"
    },
    {
      title: "Budjet(LRK)",
      dataIndex: "budjet",
      key: "budjet"
    },
    {
      title: "Suppliers",
      dataIndex: "suppliers",
      key: "suppliers"
    },

    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <>
          <div className="actionGrp">
            <Button>View</Button>
          </div>
        </>
      )
    }
  ];
  return (
    <div className="tableContainer">
      <Table dataSource={data} columns={columns} />
    </div>
  );
};
export default View;
