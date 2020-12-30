import {
  BookOutlined,
  CommentOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";

interface route {
  key: string;
  name: string;
  to?: string;
  children?: route[];
  icon?: JSX.Element;
}

export const routes: route[] = [
  {
    name: "控制面板",
    to: "/",
    key: "dashboardMenu",
    icon: <PieChartOutlined />,
  },
  {
    key: "postsManu",
    name: "博客管理",
    icon: <BookOutlined />,
    children: [
      {
        key: "postListMenu",
        name: "博客列表",
        to: "/posts",
      },
    ],
  },
  {
    key: "commentsMenu",
    name: "评论管理",
    icon: <CommentOutlined />,
    children: [
      {
        key: "commentListMenu",
        name: "评论列表",
        to: "/comments",
      },
    ],
  },
  {
    key: "usersMenu",
    name: "用户管理",
    icon: <UserOutlined />,
    children: [
      {
        key: "userListMenu",
        name: "用户列表",
        to: "/users",
      },
    ],
  },
];
