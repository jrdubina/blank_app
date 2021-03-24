import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Logo, Nav, Settings } from '../_components';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    background-color: ${props => props.backgroundColor}
`;

export const HomePage = ({ logo = '', theme = {} }) => {
    return(
        <StyleWrapper backgroundColor={theme.colorThree}>
            <Container>
                <Row>
                    <Col sm={'2'}>
                        <Logo logo={logo} logoColor={theme.colorOne} />
                    </Col>
                    <Col>
                        <Nav navItems={['About', 'Work', 'Contact']} itemsColor={theme.colorOne} />
                    </Col>
                    <Col>
                        <Settings cogColor={theme.colorTwo} />
                    </Col>
                </Row>
            </Container>
        </StyleWrapper>
    )
}

Settings.propTypes = {
    logo: PropTypes.string,
    theme: PropTypes.object
}