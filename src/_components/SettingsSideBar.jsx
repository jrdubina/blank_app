import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSettingsSideBar = styled.div`
    height: 100%;
    width: 300px;
    position: fixed;
    z-index: 1;
    top: 100px;
    right: 0;
    overflow-x: hidden;
    background-color: ${props => props.theme.colorThree};
`;

export const SettingsSideBar = ({ theme = {} }) => {
    return (
        <StyledSettingsSideBar theme={theme}>
            Change Colors
            Reorder Sections
        </StyledSettingsSideBar>
    );
}

SettingsSideBar.propTypes = {
    cogColor: PropTypes.string
}