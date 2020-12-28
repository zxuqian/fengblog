import { Breadcrumb, Layout, Menu, PageHeader } from "antd";
import React, { useState } from "react";
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  BookOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import { Link, Route, Switch } from "react-router-dom";
import Dashboard from "pages/Dashboard";
import PostManagement from "pages/PostManagement";

interface MainProps {
  children?: React.ReactNode;
}

function Main({ children }: MainProps) {
  const [collapsed, setCollapsed] = useState(false);

  const { Sider, Content, Header, Footer } = Layout;
  const { SubMenu } = Menu;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div
          className="logo"
          style={{
            height: "32px",
            margin: "16px",
            background: "rgba(255, 255, 255, 0.3)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["postList"]}
          defaultOpenKeys={["postMenu"]}
          mode="inline"
        >
          <Menu.Item key="dashBoardMenu" icon={<PieChartOutlined />}>
            <Link to="/">控制面板</Link>
          </Menu.Item>
          <SubMenu key="postMenu" icon={<BookOutlined />} title="博客管理">
            <Menu.Item key="postList" icon={<DesktopOutlined />}>
              <Link to="/posts">博客列表</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="commentMenu"
            icon={<CommentOutlined />}
            title="评论管理"
          >
            <Menu.Item key="commentList">评论列表</Menu.Item>
          </SubMenu>
          <SubMenu key="commentMenu" icon={<UserOutlined />} title="用户管理">
            <Menu.Item key="commentList">用户列表</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <PageHeader
          title="博客列表"
          subTitle="用于管理博客"
          breadcrumb={{
            routes: [
              { path: "", breadcrumbName: "博客管理" },
              { path: "", breadcrumbName: "博客列表" },
            ],
          }}
          style={{ backgroundColor: "#ffffff" }}
        />
        <Content style={{ margin: "0 16px" }}>
          <Switch>
            <Route path="/posts" exact>
              <PostManagement />
            </Route>
            <Route path="/" exact>
              <Dashboard />
            </Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Main;
