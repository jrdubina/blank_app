import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { BlogStyledWrapper } from './_style_';

export const BlogPost = ({  }) => {
    return (
        <BlogStyledWrapper>
            <Container>
                <div className='section-title text-center'>
                    <h2>Blog</h2>
                </div>
            </Container>
            <Container>
                <div className='blog-block'>
                    <Row>
                        <Col lg={4} md={6}>
                            <div className='blog-info'>
                                <a href='blog-single.html'><img src='assets/img/blog-post-1.jpg' className='img-responsive' alt='img' /></a>
                                <div className='blog-txt'>
                                    <h4><a href='blog-single.html'>SO LETS MAKE THE MOST IS BEAUTIFUL</a></h4>
                                    <p className='separator'>To an English person, it will seem like simplified English
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className='blog-info'>
                                <a href='blog-single.html'><img src='assets/img/blog-post-2.jpg' className='img-responsive' alt='img' /></a>
                                <div className='blog-txt'>
                                    <h4><a href='blog-single.html'>WE'RE GONA MAKE DREAMS COMES</a></h4>
                                    <p className='separator'>To an English person, it will seem like simplified English
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className='blog-info'>
                                <a href='blog-single.html'><img src='assets/img/blog-post-3.jpg' className='img-responsive' alt='img' /></a>
                                <div className='blog-txt'>
                                    <h4><a href='blog-single.html'>NEW LIFE CIVILIZATIONS TO BOLDLY</a></h4>
                                    <p className='separator'>To an English person, it will seem like simplified English
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </BlogStyledWrapper>
    );
}

BlogPost.propTypes = {

}