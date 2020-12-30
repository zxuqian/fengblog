import React from "react";
import { Card, PageHeader, Table } from "antd";
import { columns, demoPosts, PostType } from "./columns";
import { LayoutContent } from "components/MainLayout";

function PostManagement() {
  return (
    <LayoutContent
      header={
        <PageHeader
          onBack={() => null}
          title="博客管理"
          subTitle="博客管理列表页"
          breadcrumb={{
            routes: [
              { path: "", breadcrumbName: "博客管理" },
              { path: "", breadcrumbName: "博客列表" },
            ],
          }}
          style={{ background: "hsl(100%, 100%, 100%)" }}
        />
      }
    >
      <Card>
        <Table<PostType> columns={columns} dataSource={demoPosts} rowKey="id" />
      </Card>
    </LayoutContent>
  );
}

export default PostManagement;
