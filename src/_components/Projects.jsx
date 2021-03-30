import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { ProjectsStyledWrapper } from './_style_';

export const Projects = ({ data = {} }) => {
    return (
        <ProjectsStyledWrapper id='projects'>
            <Container>
                <div className='section-title text-center'>
                    <h2>{data?.header}</h2>
                </div>
            </Container>
            <Container>
                <Row>
                    <Col lg={12} className='d-flex justify-content-center'>
                        <ul>
                            {
                                data?.categories?.map((category, index) => {
                                    return <li key={category} className={index === 0 ? 'filter-active' : ''}>{category}</li>
                                })
                            }
                        </ul>
                    </Col>
                </Row>
                <Row className='portfolio-container no-gutters'>
                    {
                        data?.projectList?.map((project, index) => {
                            return (
                                <Col lg={6} className='filter-app' key={`${project?.category}${index}`}>
                                    <a className='portfolio-item' href={project?.url}>
                                        <div className='caption'>
                                        <div className='caption-content'>
                                            <div className='h2'>{project?.header}</div>
                                            <p className='mb-0'>{project?.subheader}</p>
                                        </div>
                                        </div>
                                        <img className='img-fluid' src={project?.image?.imgUrl} alt={project?.image?.alt} />
                                    </a>
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>
        </ProjectsStyledWrapper>
    );
}

Projects.propTypes = {
    data: PropTypes.object
}