import {
  BookOutlined,
  CommentOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Dashboard from "pages/Dashboard";
import PostManagement from "pages/PostManagement";

interface route {
  name: string;
  to?: string;
  component?: JSX.Element;
  children?: route[];
  icon?: JSX.Element;
}

export const routes: route[] = [
  {
    name: "控制面板",
    to: "/",
    component: <Dashboard />,
    icon: <PieChartOutlined />,
  },
  {
    name: "博客管理",
    icon: <BookOutlined />,
    children: [
      {
        name: "博客列表",
        to: "/posts",
        component: <PostManagement />,
      },
    ],
  },
  {
    name: "评论管理",
    icon: <CommentOutlined />,
    children: [
      {
        name: "评论列表",
        to: "/comments",
      },
    ],
  },
  {
    name: "用户管理",
    icon: <UserOutlined />,
    children: [
      {
        name: "用户列表",
        to: "/users",
      },
    ],
  },
];
