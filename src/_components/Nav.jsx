import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNav = styled.div`
    display: flex;
    margin-top: 35px;

    a:hover {
        color: ${props => props.itemsColor};
    }
`;

const StyledItem = styled.div`
    color: ${props => props.itemsColor};
    font-size: 24px;
    margin: 0 10px;
`;

//TODO: set up URL
export const Nav = ({ navItems = [],  itemsColor = '' }) => {
    return (
        <StyledNav itemsColor={itemsColor}>
            {
                navItems?.map((item, index) => {
                    return (
                        <a href='#'>
                            <StyledItem key={`${item}_${index}`} itemsColor={itemsColor}>
                                {item}
                            </StyledItem>
                        </a>
                    );
            })}
        </StyledNav>
    );
}

Nav.propTypes = {
    navItems: PropTypes.array,
    itemsColor: PropTypes.string
}