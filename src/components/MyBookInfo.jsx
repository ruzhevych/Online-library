import React, { useEffect, useState } from 'react';
import { Button, Skeleton, Space, Image, Tag } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { data } from './BooksTable';

const MyBookInfo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const foundBook = data.find(book => book.key === id);
        setBook(foundBook);
    }, [id]);

    return (
        <div>
            <Button onClick={() => navigate(-1)} color="default" variant="text" icon={<LeftOutlined />}></Button>
            {book ? (
                <div>
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                    <hr />
                    <Image
                        width={200}
                        src={book.imageUrl}
                        alt="Book Cover"
                    />
                    <p><strong>Year:</strong> {book.year}</p>
                    <p><strong>Status:</strong> {book.tags.join(', ')}</p>
                    <p><strong>Description:</strong> {book.description}</p>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Space>
                        <Skeleton.Input active />
                        <Skeleton.Input active />
                    </Space>
                    <Skeleton paragraph={{ rows: 1 }} />
                    <Skeleton.Image style={{ width: 200 }} />
                    <Skeleton active />
                </div>
            )}
        </div>
    );
};

export default MyBookInfo;
