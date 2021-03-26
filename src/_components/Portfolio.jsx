import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { PortfolioStyledWrapper } from './_style_';

export const Portfolio = ({  }) => {
    return (
        <PortfolioStyledWrapper>
            <Container>
                <div className='section-title text-center'>
                    <h2>My Portfolio</h2>
                </div>
            </Container>
            <Container>
                <Row>
                    <Col lg={12} className='d-flex justify-content-center'>
                        <ul>
                            <li data-filter='*' className='filter-active'>All</li>
                            <li data-filter='.filter-app'>App</li>
                            <li data-filter='.filter-card'>Card</li>
                            <li data-filter='.filter-web'>Web</li>
                        </ul>
                    </Col>
                </Row>
                <Row className='portfolio-container no-gutters'>
                    <Col lg={6} className='filter-app'>
                        <a className='portfolio-item' href='#!'>
                            <div className='caption'>
                            <div className='caption-content'>
                                <div className='h2'>Stationary</div>
                                <p className='mb-0'>A yellow pencil with envelopes on a clean, blue backdrop!</p>
                            </div>
                            </div>
                            <img className='img-fluid' src='public/img/portfolio-1.jpg' alt='' />
                        </a>
                    </Col>
                    <Col lg={6} className='filter-web'>
                        <a className='portfolio-item' href='#!'>
                            <div className='caption'>
                            <div className='caption-content'>
                                <div className='h2'>Ice Cream</div>
                                <p className='mb-0'>A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
                            </div>
                            </div>
                            <img className='img-fluid' src='public/img/portfolio-2.jpg' alt='' />
                        </a>
                    </Col>
                    <Col lg={6} className='filter-app'>
                        <a className='portfolio-item' href='#!'>
                            <div className='caption'>
                            <div className='caption-content'>
                                <div className='h2'>Strawberries</div>
                                <p className='mb-0'>Strawberries are such a tasty snack, especially with a little sugar on top!</p>
                            </div>
                            </div>
                            <img className='img-fluid' src='public/img/portfolio-3.jpg' alt='' />
                        </a>
                    </Col>
                    <Col lg={6} className='filter-card'>
                        <a className='portfolio-item' href='#!'>
                            <div className='caption'>
                            <div className='caption-content'>
                                <div className='h2'>Workspace</div>
                                <p className='mb-0'>A yellow workspace with some scissors, pencils, and other objects.</p>
                            </div>
                            </div>
                            <img className='img-fluid' src='public/img/portfolio-4.jpg' alt='' />
                        </a>
                    </Col>
                </Row>
            </Container>
        </PortfolioStyledWrapper>
    );
}

Portfolio.propTypes = {

}