import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Logo, Settings } from '../_components';
import PropTypes from 'prop-types';

export const HomePage = ({ logo = '', theme = {} }) => {
    return(
        <Container>
            <Row className='mt-3'>
                <Col>
                    <Logo logo={logo} logoColor={theme.colorOne} />
                </Col>
                <Col>
                    <Settings cogColor={theme.colorTwo} />
                </Col>
            </Row>
        </Container>
    )
}

Settings.propTypes = {
    logo: PropTypes.string,
    theme: PropTypes.object
}