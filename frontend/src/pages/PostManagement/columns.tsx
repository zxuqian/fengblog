export const columns = [{
    title: "文章标题",
    dataIndex: "title",
    key: "title"
}, {
  title: "作者",
  dataIndex: "author",
  key: "author"
}, {
  title: "发布时间",
  dataIndex: "createdAt",
  key: "createdAt"
}, {
  title: "已发布？",
  dataIndex: "isPublished",
  key: "isPublished"
}];

export const demoPosts = [
  {
    id: 1,
    title: "文章标题 1",
    author: "张三",
    createdAt: "2020-12-12",
    isPublished: "是"
  },
  {
    id: 2,
    title: "文章标题 2",
    author: "张三",
    createdAt: "2020-12-12",
    isPublished: "是"
  },
  {
    id: 3,
    title: "文章标题 3",
    author: "张三",
    createdAt: "2020-12-12",
    isPublished: "是"
  }
]