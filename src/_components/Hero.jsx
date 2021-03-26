import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import Typist from 'react-typist';

library.add([faFacebookF, faTwitter, faInstagram, faLinkedin, faGithub]);

const StyledWrapper = styled.div`
    background: url('../public/img/Jared-Dubina.jpg') repeat scroll center center/cover;
    height: 100vh;
    width: 100%;

    .hero-content {
        height: 100vh;
        text-align: left;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;

        h1 {
            display: inline-flex
            font-size: 40px;
            font-weight: 700;
            margin-bottom: 10px;
            text-transform: uppercase;
            color: #000;

            .Typist {
                margin-left: 7px;
            }
        }

        p {
            font-size: 13px;
            letter-spacing: 3px;
            margin-top: 0;
            margin-bottom: 30px;
            text-transform: capitalize;
            color: #000;
            font-weight: 500;
        }
    }
`;

const StyledLi = styled.li`
    float: left;
    margin-right: 20px;

    .fontAwesomeIcon {
        color: #000;
        font-size: 25px;
    }

    a {
        color: #000;
    }
`;

export const Hero = ({  }) => {
    return (
        <StyledWrapper className='home'>
            <Container>
                <div className='hero-content'>
                    <h1>I'm
                        <Typist>
                            <span>Jared Dubina</span>
                            <Typist.Backspace count={12} delay={1500} />
                            <span>An Engineer</span>
                            <Typist.Backspace count={8} delay={1500} />
                            <span>Innovator</span>
                            <Typist.Backspace count={11} delay={1500} />
                            <span> Collaborator</span>
                            <Typist.Backspace count={12} delay={1500} />
                            <span>Problem Solver</span>
                            <Typist.Backspace count={16} delay={1500} />
                            <span>Jared Dubina</span>
                        </Typist>
                    </h1>
                    <p>Engineer, Innovator, Collaborator, Problem Solver</p>

                    <ul className='list-unstyled list-social'>
                        <StyledLi>
                            <a target='_blank' href='#'>
                                <FontAwesomeIcon icon={['fab', 'twitter']} className='fontAwesomeIcon' />
                            </a>
                        </StyledLi>
                        <StyledLi>
                            <a target='_blank' href='https://www.instagram.com/jrdubina/'>
                                <FontAwesomeIcon icon={['fab', 'instagram']} className='fontAwesomeIcon' />
                            </a>
                        </StyledLi>
                        <StyledLi>
                            <a target='_blank' href='https://www.linkedin.com/in/jareddubina/'>
                                <FontAwesomeIcon icon={['fab', 'linkedin']} className='fontAwesomeIcon' />
                            </a>
                        </StyledLi>
                        <StyledLi>
                            <a target='_blank' href='https://github.com/jrdubina'>
                                <FontAwesomeIcon icon={['fab', 'github']} className='fontAwesomeIcon' />
                            </a>
                        </StyledLi>
                        <StyledLi>
                            <a target='_blank' href='https://www.joinclubhouse.com/app'>
                                Clubhouse
                            </a>
                        </StyledLi>
                    </ul>
                </div>
            </Container>
        </StyledWrapper>
    );
}

Hero.propTypes = {

}