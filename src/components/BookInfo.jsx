import { DotChartOutlined, LeftOutlined } from '@ant-design/icons';
import { Image, Tag, Divider, Skeleton, Space, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const api = "https://gutendex.com/books/";

export default function BookInfo() {
    const [item, setItem] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(api + id)
            .then(res => res.json())
            .then(data => setItem(data))
            .catch(error => console.error("Error fetching book details:", error));
    }, []);

    return (
        <div>
            <Button onClick={() => navigate(-1)} icon={<LeftOutlined />}>Back</Button>
            {
                item ?
                    <div>
                        <h2>{item.title}</h2>
                        <Divider />
                        <Image
                            width={200}
                            src={item.formats["image/jpeg"]}
                            alt="Book Cover"
                        />
                        <p>{item.authors[0].name} ({item.authors[0].birth_year} - {item.authors[0].death_year})</p>
                        <p>Languages: {item.languages.join(", ")}</p>
                        <p>Media type: {item.media_type}</p>
                        <p>Popularity: {item.download_count > 1000 ?
                            <Tag color="green">{item.download_count} downloads</Tag> :
                            <Tag color="volcano">{item.download_count} downloads</Tag>}
                        </p>
                        <Divider />
                        <p>
                            <a href={item.formats["text/html"]} target="_blank" rel="noopener noreferrer">Read online</a> |{" "}
                            <a href={item.formats["application/epub+zip"]} target="_blank" rel="noopener noreferrer">Download EPUB</a>
                        </p>
                    </div>
                    :
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Skeleton.Input active style={{ width: '60%' }} />
                        <Skeleton.Image style={{ width: 200 }} />
                        <Skeleton active paragraph={{ rows: 4 }} />
                    </Space>
            }
        </div>
    );
}
