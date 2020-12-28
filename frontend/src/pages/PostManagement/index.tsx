import React from "react";
import { Table } from "antd";
import { columns, demoPosts } from "./columns";

function PostManagement() {
  return <Table columns={columns} dataSource={demoPosts} />;
}

export default PostManagement;
