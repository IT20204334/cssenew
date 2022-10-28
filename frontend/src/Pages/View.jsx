import React, { useCallback, useEffect } from "react";
import { Button, Table } from "antd";
import moment from "moment";
import { useState } from "react";
import useRequest from "../Services/RequestContext";

const View = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const { request } = useRequest();

  const fetchView = useCallback(async () => {
    setLoading(true);
    try {
      const res = await request.get("order");
      if (res.status === 200) {
        console.log("data", res.data);
        setData(res.data);
      }
    } catch (e) {
      console.log("error fetching View!", e);
    } finally {
      setLoading(false);
    }
  }, [request]);

  useEffect(() => {
    fetchView();
  }, [fetchView]);

  const columns = [
    {
      title: "Meterials",
      dataIndex: "materials",
      key: "materials",
    },
    {
      title: "Budget(LRK)",
      dataIndex: "budget",
      key: "budget",
    },
    {
      title: "Suppliers",
      dataIndex: "supplier",
      key: "supplier",
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
      ),
    },
  ];
  return (
    <div className="tableContainer">
      <Table
        loading={loading}
        dataSource={data}
        columns={columns}
        rowKey={(record) => record._id}
      />
    </div>
  );
};
export default View;
