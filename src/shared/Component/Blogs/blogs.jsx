import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlogCart from './Card';
import './blog.scss'

function Blog() {
    return (
        <div className='blog'>
            <Container>
                <h1 className='blog_title'>Blogs</h1>
                <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
                    <Col>
                        <BlogCart img='https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8ODV8MzQ0NDQ5NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
                    </Col>
                    <Col>
                        <BlogCart img='https://images.unsplash.com/photo-1516166328576-82e16a127024?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzJ8MzQ0NDQ5NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
                    </Col>
                    <Col>
                        <BlogCart img='https://images.unsplash.com/photo-1575211447836-6b5943b34a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDB8MzQ0NDQ5NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
                    </Col>
                    <Col>
                        <BlogCart img='https://images.unsplash.com/photo-1494879540385-bc170b0878a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDZ8MzQ0NDQ5NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
                    </Col>
                    <Col>
                        <BlogCart img='https://images.unsplash.com/photo-1494879540385-bc170b0878a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDZ8MzQ0NDQ5NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
                    </Col>

                    <Col >
                        <BlogCart img='https://images.unsplash.com/photo-1497384401032-2182d2687715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTV8MzQ0NDQ5NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
                    </Col>
                    <Col >
                        <BlogCart img='https://images.unsplash.com/photo-1502021680532-838cfc650323?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NjF8MzQ0NDQ5NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
                    </Col>
                    <Col >
                        <BlogCart img='https://images.unsplash.com/photo-1502147704994-6bfb9b28d71d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Njh8MzQ0NDQ5NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
                    </Col>
                    <Col >
                        <BlogCart img='https://images.unsplash.com/photo-1514496959998-c01c40915c5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nzl8MzQ0NDQ5NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
                    </Col>
                    <Col >
                        <BlogCart img='https://images.unsplash.com/photo-1514496959998-c01c40915c5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nzl8MzQ0NDQ5NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Blog;