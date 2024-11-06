import React, { useEffect, useState } from 'react';
import { Card, Row, Col, message } from 'antd';
import { Link } from 'react-router-dom';

const api = "https://gutendex.com/books/";

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const randomPage = Math.floor(Math.random() * 100) + 1;
        fetch(`${api}?page=${randomPage}&limit=100`)
            .then((res) => res.json())
            .then((data) => setBooks(data.results.slice(0, 100)))
            .catch((error) => {
                console.error("Error fetching books:", error);
                message.error("Failed to load books.");
            });
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <Row gutter={[16, 16]} justify="center">
                {books.map((book) => (
                    <Col key={book.id} xs={24} sm={12} md={8} lg={6} xl={6}>
                        <Link to={`/mybooks/${book.id}`}>
                            <Card
                                hoverable
                                cover={
                                    <img
                                        src={book.formats["image/jpeg"] || 'https://via.placeholder.com/150'}
                                        alt="Book Cover"
                                        style={{ height: '300px', objectFit: 'cover' }}
                                    />
                                }
                            >
                                <Card.Meta title={book.title} description={book.authors.map(author => author.name).join(', ')} />
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Home;
