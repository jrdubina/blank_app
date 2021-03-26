import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

const StyledWrapper = styled.div`
    width: 100%;
    height: auto;
    background: #f7f7f7;
    padding-top: 210px;
    padding-bottom: 90px;

    .div-img-bg {
        padding-bottom: 30px;
        border: 20px solid #b8a07e;

        img {
            width: 100%;
            box-shadow: 0px 0px 85px 0px rgba(0, 0, 0, 0.14);
            margin-top: -60px;
            margin-left: 40px;
            height: 400px;
            -o-object-fit: cover;
            object-fit: cover;
        }
    }

    .p-heading {
        font-family: 'Playfair Display', serif;
        font-size: 28px;
        text-align: left;
        color: #999999;
    }

    .separator {
        max-width: 80%;
        margin-bottom: 0;
        text-align: left;
        color: #999999;
    }
`;

export const About = ({  }) => {
    return (
        <StyledWrapper>
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
        </StyledWrapper>
    );
}

About.propTypes = {

}