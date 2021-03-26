import React from 'react';
import { About, BlogPost, Hero, Portfolio, Skills } from '../_components';
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
                <Portfolio />
                <BlogPost />
            </main>
        </StyleWrapper>
    )
}

HomePage.propTypes = {
    logo: PropTypes.string,
    theme: PropTypes.object
}