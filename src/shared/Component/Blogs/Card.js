import React from 'react';
import Card from 'react-bootstrap/Card';
import './blog.scss'


function BlogCart({ img }) {
  return (
    <Card className='Blog_card'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer....
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BlogCart;