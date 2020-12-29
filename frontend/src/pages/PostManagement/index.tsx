import React from "react";
import { Card, Table, Typography } from "antd";
import { columns, demoPosts } from "./columns";

function PostManagement() {
  return (
    <Card>
      <Table columns={columns} dataSource={demoPosts} />
    </Card>
  );
}

export default PostManagement;
