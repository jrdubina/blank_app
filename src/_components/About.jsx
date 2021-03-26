import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { AboutStyledWrapper } from './_style_/About';

export const About = ({  }) => {
    return (
        <AboutStyledWrapper>
            <Container>
                <Row className='justify-content-between'>
                    <Col lg={4}>
                        <div className='div-img-bg'>
                            <img src='../public/img/Jared-Dubina-Head.jpg' className='img-responsive' alt='me' />
                        </div>
                    </Col>
                    <Col lg={7}>
                        <p className='p-heading'>i'm a senior software engineer based in phoenix, az and i primarily work on the front end of web apps. i have passion for javascript and the framework react.</p>
                        <p className='separator'>I never want to be considered the smartest person in the room, as I'm always looking to grow and learn. I enjoy being a mentor as much as I enjoy being mentored. With my bachelor's degree being in business administration I bring a unique perspective when it comes to developing web apps.</p>
                    </Col>
                </Row>
            </Container>
        </AboutStyledWrapper>
    );
}

About.propTypes = {

}