import { Layout, Menu } from "antd";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "./routes";
import { Route, Switch } from "react-router-dom";
import PostManagement from "pages/PostManagement";
import PostDetail from "pages/PostDetail";
import Dashboard from "pages/Dashboard";

interface LayoutProps {
  header?: React.ReactNode;
  children?: React.ReactNode;
}

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const { Sider, Footer } = Layout;
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
        <Switch>
          <Route path="/posts" exact>
            <PostManagement />
          </Route>
          <Route path="/posts/:id" exact>
            <PostDetail />
          </Route>
          <Route path="/" exact>
            <Dashboard />
          </Route>
        </Switch>
        <Footer style={{ textAlign: "center" }}>
          FengBlog ©2020 Created by Xuqian Zhang（峰华前端工程师）
        </Footer>
      </Layout>
    </Layout>
  );
}

export const LayoutContent = ({ header, children }: LayoutProps) => {
  const { Content } = Layout;
  return (
    <Fragment>
      {header}
      <Content
        style={{
          margin: "16px",
        }}
      >
        {children}
      </Content>
    </Fragment>
  );
};

export default MainLayout;
