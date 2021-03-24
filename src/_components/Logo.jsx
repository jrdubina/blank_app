import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLogo = styled.div`
    letter-spacing: -.3em;
    font-size: 100px;
    font-weight: bolder;
    margin-top: -30px;

    a {
        color: ${props => props.logoColor};
    }

    a:hover {
        text-decoration: none;
    }
`;

//TODO: set up URL

export const Logo = ({ logo = '',  logoColor = '' }) => {
    return (
        <StyledLogo logoColor={logoColor}>
            <a href='#'>
                {logo}
            </a>
        </StyledLogo>
    );
}

Logo.propTypes = {
    logo: PropTypes.string,
    logoColor: PropTypes.string
}