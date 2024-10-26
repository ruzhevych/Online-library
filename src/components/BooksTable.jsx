import React from 'react';
import { Space, Table, Tag } from 'antd';
import { DeleteFilled, EditFilled, InfoCircleFilled, SearchOutlined } from '@ant-design/icons';

const columns = [
  {
    title: 'Image',
    dataIndex: 'imageUrl',
    key: 'image',
    render: (_, item) => <img height={70} src={item.imageUrl} alt={item.title}></img>,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag == "done" ? 'green' : 'geekblue';
          if (tag === 'not started') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Popconfirm
          title="Delete the product"
          description={`Are you sure to delete ${record.title}?`}
          onConfirm={() => deleteItem(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button color="danger" variant="outlined" icon={<DeleteFilled />} />
        </Popconfirm>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    year: 1958,
    imageUrl: "https://m.media-amazon.com/images/I/71U3iRYNsFL._AC_UF1000,1000_QL80_.jpg",
    tags: ['done'],
  },
  {
    key: '2',
    title: 'Fairy tales',
    author: 'Hans Christian Andersen',
    year: 1836,
    imageUrl: "https://kidsbookspublishing.com/wp-content/uploads/2021/01/MyFavoriteFairyTales_FC.png",
    tags: ['in progress'],
  },
  {
    key: '3',
    title: 'The Divine Comedy',
    author: 'Dante Alighieri',
    year: 1315,
    imageUrl: "https://m.media-amazon.com/images/I/51i-9SGWr-L._AC_UF1000,1000_QL80_.jpg",
    tags: ['not started'],
  },
  {
    key: '4',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    imageUrl: "https://m.media-amazon.com/images/I/712P0p5cXIL._AC_UF1000,1000_QL80_.jpg",
    tags: ['done'],
  },
  {
    key: '5',
    title: 'Don Quijote De La Mancha',
    author: 'Miguel de Cervantes',
    year: 1610,
    imageUrl: "https://m.media-amazon.com/images/I/91tV-Bk+MBL._AC_UF1000,1000_QL80_.jpg",
    tags: ['done'],
  },
  {
    key: '6',
    title: 'The Decameron',
    author: 'Giovanni Boccaccio',
    year: 1351,
    imageUrl: "https://cdn.kobo.com/book-images/77a4784f-b344-47cd-82c5-b2cbe70a0cbd/1200/1200/False/the-decameron-52.jpg",
    tags: ['not started'],
  },
  {
    key: '7',
    title: 'Ficciones',
    author: 'Jorge Luis Borges',
    year: 1965,
    imageUrl: "https://images.cdn3.buscalibre.com/fit-in/360x360/46/85/4685286dbc1ec2013245afe1d537acfb.jpg",
    tags: ['done'],
  },
  {
    key: '8',
    title: 'The Stranger',
    author: 'Albert Camus',
    year: 1942,
    imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1590930002i/49552.jpg",
    tags: ['in progress'],
  },
  {
    key: '9',
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    year: 1866,
    imageUrl: "https://m.media-amazon.com/images/I/51Vg24nKbPL._AC_UF1000,1000_QL80_.jpg",
    tags: ['done'],
  },
];
const BooksTable = () => <Table columns={columns} dataSource={data} />;
export default BooksTable;