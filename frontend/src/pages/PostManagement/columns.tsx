import { Space } from "antd";

export const columns = [
  {
    title: "文章标题",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "作者",
    dataIndex: "author",
    key: "author",
  },
  {
    title: "创建时间",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "操作",
    render: () => <a>详情</a>,
  },
];

export const demoPosts = [
  {
    id: 1,
    title: "文章标题 1",
    author: "张三",
    createdAt: "2020-12-12",
    status: "草稿",
  },
  {
    id: 2,
    title: "文章标题 2",
    author: "张三",
    createdAt: "2020-12-12",
    status: "待审核",
  },
  {
    id: 3,
    title: "文章标题 3",
    author: "张三",
    createdAt: "2020-12-12",
    status: "已发布",
  },
  {
    id: 4,
    title: "文章标题 4",
    author: "张三",
    createdAt: "2020-12-12",
    status: "待修改",
  },
];
