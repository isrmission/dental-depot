import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = (props) => {
    const { tipsTitle, tipsText, tipsImage } = props.blog;
    return (
        <div>
            <Card style={{ width: '22rem' }} className="text-start bg-transparent border-0 mx-auto">
                <Card.Img variant="top" src={tipsImage} />
                <Card.Body className="p-0">
                    <Card.Title className="fs-4">{tipsTitle}</Card.Title>
                    <Card.Text>
                        {tipsText}...
                    </Card.Text>
                    <Button className="px-0 " variant="lite">
                        <Link>
                            Read More...
                        </Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;