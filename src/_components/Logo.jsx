import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoDiv = styled.div`
    color: ${props => props.logoColor};
    font-size: xx-large;
    font-weight: bolder;
    font-family: "Rock Salt", sans-serif;
`;

export const Logo = ({ logo = '',  logoColor = '' }) => {
    return (
        <LogoDiv logoColor={logoColor}>
            {logo}
        </LogoDiv>
    );
}

Logo.propTypes = {
    logo: PropTypes.string,
    logoColor: PropTypes.string
}