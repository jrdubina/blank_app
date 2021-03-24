import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCog } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';

library.add(faCog);

const StyledSettings = styled.div`
    float: right;
`;

export const Settings = ({ cogColor = '' }) => {
    return (
        <StyledSettings>
            <FontAwesomeIcon icon='cog' size='3x' color={cogColor} />
        </StyledSettings>
    );
}

Settings.propTypes = {
    cogColor: PropTypes.string
}