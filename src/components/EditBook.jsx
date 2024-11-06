import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { LeftOutlined } from '@ant-design/icons'
import { data } from './BooksTable';

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const bookToEdit = data.find(book => book.key === id);
    if (bookToEdit) {
      setBook(bookToEdit);
      form.setFieldsValue(bookToEdit);
    } else {
      message.error('Book not found');
      navigate('/mybooks');
    }
  }, [id, form, navigate]);

  const handleSubmit = (values) => {
    const updatedBookIndex = data.findIndex(book => book.key === id);
    if (updatedBookIndex !== -1) {
      data[updatedBookIndex] = { ...data[updatedBookIndex], ...values };
      message.success('Book updated successfully!');
      navigate('/mybooks');
    } else {
      message.error('Failed to update book');
    }
  };

  if (!book) return null;

  return (
    <>
      <Button onClick={() => navigate(-1)} color="default" variant="text" icon={<LeftOutlined />}></Button>
      <h2>Edit Book</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please enter the book title' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="author"
          label="Author"
          rules={[{ required: true, message: 'Please enter the author' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="year"
          label="Year"
          rules={[{ required: true, message: 'Please enter the publication year' }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter a description' }]}>
          <Input.TextArea rows={3} />
        </Form.Item>
        <Form.Item
          name="imageUrl"
          label="Image URL"
          rules={[{ type: 'url', message: 'Please enter a valid URL' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update Book
          </Button>
        </Form.Item>
      </Form>
    </>

  );
};

export default EditBook;
