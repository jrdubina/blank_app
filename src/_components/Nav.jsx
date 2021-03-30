import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { NavStyledWrapper, MenuStyledWrapper } from './_style_';

export const Nav = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0); 
    const [visible, setVisible] = useState(false); 

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
    
        setVisible((prevScrollPos < currentScrollPos && prevScrollPos - currentScrollPos < 70) || currentScrollPos > 10);
    
        setPrevScrollPos(currentScrollPos);
      };

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    
      }, [prevScrollPos, visible, handleScroll]);

    return (
        <NavStyledWrapper className='fixed-top' style={{top: `${visible ? '0' : '-100%'}`}}>
            <Container className='d-flex align-items-center justify-content-between'>
                <h1 className='logo'><a href='index.html'>JD</a></h1>
                <MenuStyledWrapper className='navbar'>
                    <ul>
                        <li><a className='nav-link scrollto' href='#about'>About</a></li>
                        <li><a className='nav-link  scrollto' href='#projects'>Portfolio</a></li>
                        <li><a className='nav-link  scrollto' href='#blog'>Blog</a></li>
                        <li className='dropdown'><a href='#'><span>Drop Down</span> <i className='bi bi-chevron-down'></i></a>
                            <ul>
                                <li><a href='#'>Drop Down 1</a></li>
                                <li className='dropdown'><a href='#'><span>Deep Drop Down</span> <i className='bi bi-chevron-right'></i></a>
                                    <ul>
                                        <li><a href='#'>Deep Drop Down 1</a></li>
                                        <li><a href='#'>Deep Drop Down 2</a></li>
                                        <li><a href='#'>Deep Drop Down 3</a></li>
                                        <li><a href='#'>Deep Drop Down 4</a></li>
                                        <li><a href='#'>Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href='#'>Drop Down 2</a></li>
                                <li><a href='#'>Drop Down 3</a></li>
                                <li><a href='#'>Drop Down 4</a></li>
                            </ul>
                        </li>
                        <li><a className='nav-link scrollto' href='#contact'>Contact</a></li>
                    </ul>
                    <i className='bi bi-list mobile-nav-toggle'></i>
                </MenuStyledWrapper>
            </Container>
        </NavStyledWrapper>
    );
}

Nav.propTypes = {
    
}