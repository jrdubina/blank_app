import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { About, Hero, Skills } from '../_components';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    //background-color: ${props => props.backgroundColor}
`;

export const HomePage = ({ logo = '', theme = {} }) => {
    return(
        <StyleWrapper backgroundColor={theme.colorThree}>
            <Hero/>
            <main>
                <About />
                <Skills />
            </main>
        </StyleWrapper>
    )
}

HomePage.propTypes = {
    logo: PropTypes.string,
    theme: PropTypes.object
}