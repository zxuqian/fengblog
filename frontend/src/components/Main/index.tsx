import { Breadcrumb, Layout, Menu, PageHeader, Space } from "antd";
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
import { routes } from "./routes";

interface MainProps {
  children?: React.ReactNode;
}

function Main({ children }: MainProps) {
  const [collapsed, setCollapsed] = useState(false);

  const { Sider, Content, Footer } = Layout;
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
          {routes.map((route) => {
            if (route.children) {
              return (
                <SubMenu key={route.key} icon={route.icon} title={route.name}>
                  {route.children.map((subRoute) => (
                    <Menu.Item key={subRoute.key} icon={subRoute.icon}>
                      <Link to={subRoute.to || ""}>{subRoute.name}</Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              );
            } else {
              return (
                <Menu.Item key={route.key} icon={route.icon}>
                  <Link to={route.to || ""}>{route.name}</Link>
                </Menu.Item>
              );
            }
          })}
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
        <Content
          style={{
            margin: "16px",
            padding: "24px",
          }}
        >
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
          FengBlog ©2020 Created by Xuqian Zhang（峰华前端工程师）
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Main;
