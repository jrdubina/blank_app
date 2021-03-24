import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Settings } from '../_components';

export const HomePage = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <Settings />
                </Col>
            </Row>
        </Container>
    )
}