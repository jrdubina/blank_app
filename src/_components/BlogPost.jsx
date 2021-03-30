import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { BlogStyledWrapper } from './_style_';
import AOS from 'aos'
import 'aos/dist/aos.css';

export const BlogPost = ({ data = {} }) => {
    AOS.init();

    return (
        <BlogStyledWrapper id='blog'>
            <Container>
                <div className='section-title text-center'>
                    <h2>{data?.header}</h2>
                </div>
            </Container>
            <Container>
                <div className='blog-block'>
                    <Row>
                        {
                            data?.blogList?.map((post, index) => {
                                return (
                                    <Col lg={4} md={6} key={`${post?.url}${index}`}>
                                        <div 
                                            className='blog-info'
                                            data-aos='flip-up'
                                            data-aos-anchor-placement='bottom-bottom'
                                            data-aos-delay='750'
                                        >
                                            <a href={post?.url}>
                                                <img src={post?.image?.blogImage} className='img-responsive' alt={post?.image?.alt} />
                                            </a>
                                            <div className='blog-txt'>
                                                <h4><a href={post?.url}>{post?.header}</a></h4>
                                                <p className='separator'>{post?.subheader}</p>
                                            </div>
                                        </div>
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </div>
            </Container>
        </BlogStyledWrapper>
    );
}

BlogPost.propTypes = {
    data: PropTypes.object
}