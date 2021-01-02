import {
  Button,
  Card,
  Col,
  Descriptions,
  Form,
  Grid,
  Input,
  PageHeader,
  Row,
} from "antd";
import { LayoutContent } from "components/MainLayout";
import React from "react";

function PostEditing() {
  const pageHeader = (
    <PageHeader
      title="博客编辑"
      style={{ background: "#ffffff" }}
      breadcrumb={{
        routes: [
          { path: "", breadcrumbName: "博客管理" },
          { path: "", breadcrumbName: "博客列表" },
          { path: "", breadcrumbName: "博客编辑" },
        ],
      }}
      // extra={[
      //   <Button key="1" type="primary">
      //     编辑
      //   </Button>,
      //   <Button key=" 2">审核</Button>,
      //   <Button danger type="primary" key="3">
      //     删除
      //   </Button>,
      // ]}
    ></PageHeader>
  );
  return (
    <LayoutContent header={pageHeader}>
      <Card title="编辑">
        <Form>
          <Form.Item label="博客标题">
            <Input value="博客标题" />
          </Form.Item>
          <Form.Item>
            <Input.TextArea>博客正文</Input.TextArea>
          </Form.Item>
        </Form>
      </Card>
      {/* <Descriptions size="small" column={3}>
          <Descriptions.Item label="标题">博客标题</Descriptions.Item>
          <Descriptions.Item label="发布时间">2017-01-10</Descriptions.Item>
          <Descriptions.Item label="作者">作者 1</Descriptions.Item>
          <Descriptions.Item label="是否已审核">是</Descriptions.Item>
          <Descriptions.Item label="状态">已发布</Descriptions.Item>
        </Descriptions> */}
    </LayoutContent>
  );
}

export default PostEditing;
