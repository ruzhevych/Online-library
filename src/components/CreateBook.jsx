import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Space, message } from 'antd';
import { LeftOutlined } from '@ant-design/icons'
import { data } from './BooksTable';


const CreateBook = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    const newBook = {
      key: (data.length + 1).toString(), 
      title: values.title,
      author: values.author,
      year: values.year,
      imageUrl: values.imageUrl || 'https://via.placeholder.com/100',
      tags: ['not started'],
      description: [values.description]
    };

    data.unshift(newBook);

    message.success('Book added successfully!');
    navigate('/mybooks'); 
  };

  return (
    <>
      <Button onClick={() => navigate(-1)} color="default" variant="text" icon={<LeftOutlined />}></Button>
      <h2>Create a New Book</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{ year: new Date().getFullYear() }}
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
          <Input.TextArea rows={3} placeholder="Brief description of the book" />
        </Form.Item>
        <Form.Item
          name="imageUrl"
          label="Image URL"
          rules={[{ type: 'url', message: 'Please enter a valid URL' }]}
        >
          <Input placeholder="Optional image URL" />
        </Form.Item>
        <Space>
          <Button type="default" htmlType="reset">
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Space>
      </Form>
    </>
  );
};

export default CreateBook;
