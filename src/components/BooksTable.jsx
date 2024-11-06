import React, { useEffect, useState } from 'react';
import { Button, message, Popconfirm, Space, Table, Tag } from 'antd';
import { AppstoreAddOutlined, DeleteFilled, EditFilled, InfoCircleFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const data = [
  {
    key: '1',
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    year: 1958,
    imageUrl: "https://m.media-amazon.com/images/I/71U3iRYNsFL._AC_UF1000,1000_QL80_.jpg",
    tags: ['done'],
    description: 'A profound novel exploring the complexities of pre-colonial Nigerian society and the disruptive impact of European colonialism on indigenous culture.',
  },
  {
    key: '2',
    title: 'Fairy tales',
    author: 'Hans Christian Andersen',
    year: 1836,
    imageUrl: "https://kidsbookspublishing.com/wp-content/uploads/2021/01/MyFavoriteFairyTales_FC.png",
    tags: ['in progress'],
    description: 'A timeless collection of magical and moral tales, illustrating human nature through stories like "The Little Mermaid" and "The Ugly Duckling."',
  },
  {
    key: '3',
    title: 'The Divine Comedy',
    author: 'Dante Alighieri',
    year: 1315,
    imageUrl: "https://m.media-amazon.com/images/I/51i-9SGWr-L._AC_UF1000,1000_QL80_.jpg",
    tags: ['not started'],
    description: 'An epic journey through Hell, Purgatory, and Heaven, reflecting the medieval world’s moral and philosophical views.',
  },
  {
    key: '4',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    imageUrl: "https://m.media-amazon.com/images/I/712P0p5cXIL._AC_UF1000,1000_QL80_.jpg",
    tags: ['done'],
    description: 'A beloved romantic novel centered around the witty Elizabeth Bennet and her evolving relationship with the reserved Mr. Darcy.',
  },
  {
    key: '5',
    title: 'Don Quijote De La Mancha',
    author: 'Miguel de Cervantes',
    year: 1610,
    imageUrl: "https://m.media-amazon.com/images/I/91tV-Bk+MBL._AC_UF1000,1000_QL80_.jpg",
    tags: ['done'],
    description: 'A satirical novel following the delusional yet charming knight, Don Quijote, on his chivalrous adventures, offering a humorous take on idealism.',
  },
  {
    key: '6',
    title: 'The Decameron',
    author: 'Giovanni Boccaccio',
    year: 1351,
    imageUrl: "https://cdn.kobo.com/book-images/77a4784f-b344-47cd-82c5-b2cbe70a0cbd/1200/1200/False/the-decameron-52.jpg",
    tags: ['not started'],
    description: 'A collection of 100 tales told by young nobles escaping the plague in Florence, revealing the wit, morality, and satire of medieval Italy.',
  },
  {
    key: '7',
    title: 'Ficciones',
    author: 'Jorge Luis Borges',
    year: 1965,
    imageUrl: "https://images.cdn3.buscalibre.com/fit-in/360x360/46/85/4685286dbc1ec2013245afe1d537acfb.jpg",
    tags: ['done'],
    description: 'A groundbreaking work of magical realism, blending philosophical ideas and complex narratives that challenge the nature of reality and fiction.',
  },
  {
    key: '8',
    title: 'The Stranger',
    author: 'Albert Camus',
    year: 1942,
    imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1590930002i/49552.jpg",
    tags: ['in progress'],
    description: 'A thought-provoking novel about existentialism, where the protagonist faces the absurdity of life after committing a senseless crime.',
  },
  {
    key: '9',
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    year: 1866,
    imageUrl: "https://m.media-amazon.com/images/I/51Vg24nKbPL._AC_UF1000,1000_QL80_.jpg",
    tags: ['done'],
    description: 'A psychological drama delving into guilt and redemption, as Raskolnikov grapples with the moral consequences of his actions.',
  },
];


const BooksTable = () => {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      render: (imageUrl) => (
        <img
          src={imageUrl || 'https://via.placeholder.com/100'}
          alt="Book Cover"
          style={{ width: 50, height: 70 }}
        />
      ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => (
        <Link to={`/mybooks/books/${record.key}`}>{text}</Link>
      ),
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
      dataIndex: 'tags',
      key: 'tags',
      render: (tags) => (
        tags.map(tag => {
          let color;
          if (tag === 'done') color = 'green';
          else if (tag === 'in progress') color = 'blue';
          else if (tag === 'not started') color = 'volcano';
          return <Tag color={color} key={tag}>{tag.replace(/^\w/, c => c.toUpperCase())}</Tag>;
        })
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/mybooks/books/${record.key}`}>
            <Button icon={<InfoCircleFilled />} />
          </Link>
          <Link to={`/mybooks/edit/${record.key}`}>
            <Button style={{ color: '#faad14' }} variant="outlined" icon={<EditFilled />} />
          </Link>
          <Popconfirm
            title="Delete the book"
            description={`Are you sure to delete ${record.title}?`}
            onConfirm={() => deleteItem(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger icon={<DeleteFilled />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    setBooks(data);
  }, []);

  const deleteItem = (key) => {
    setBooks(books.filter(book => book.key !== key));
    message.success('Book deleted successfully!');
  };

  return (
    <>
      <div>
        <Link to="/create">
          <Button type="primary" icon={<AppstoreAddOutlined />} style={{ marginBottom: '16px' }}>
            Create New Book
          </Button>
        </Link>
      </div>
      <Table columns={columns} dataSource={books} rowKey="key" />
    </>
  );
};

export default BooksTable;
