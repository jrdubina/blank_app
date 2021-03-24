import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCog } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';

library.add(faCog);

const StyledSettings = styled.div`
    float: right;
    margin-top: 30px;
    
    .fontAwesomeIcon {
        transition: 0.9s;
        transform: rotate(-180deg);
    }

    .fontAwesomeIcon:hover {
        cursor: pointer;
        transition: 0.9s;
        transform: rotate(180deg);
    }
`;

export const Settings = ({ cogColor = '' }) => {
    return (
        <StyledSettings>
            <FontAwesomeIcon icon='cog' size='3x' color={cogColor} className='fontAwesomeIcon' />
        </StyledSettings>
    );
}

Settings.propTypes = {
    cogColor: PropTypes.string
}