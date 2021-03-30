import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { AboutStyledWrapper } from './_style_/About';

export const About = ({ data = {} }) => {
    return (
        <AboutStyledWrapper id='about'>
            <Container>
                <Row className='justify-content-between'>
                    <Col lg={4}>
                        <div className='div-img-bg'>
                            <img src={data?.image?.headshotImg} className='img-responsive' alt={data?.image?.alt} />
                        </div>
                    </Col>
                    <Col lg={7}>
                        <p className='p-heading'>{data?.mainText}</p>
                        <p className='separator'>{data?.bodyText}</p>
                    </Col>
                </Row>
            </Container>
        </AboutStyledWrapper>
    );
}

About.propTypes = {
    data: PropTypes.object
}