import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Typist from 'react-typist';
import { HeroStyledLi, HeroStyledWrapper } from './_style_/Hero';

library.add([faFacebookF, faTwitter, faInstagram, faLinkedin, faGithub]);

export const Hero = ({  }) => {
    return (
        <HeroStyledWrapper className='home'>
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
                        <HeroStyledLi>
                            <a target='_blank' href='#'>
                                <FontAwesomeIcon icon={['fab', 'twitter']} className='fontAwesomeIcon' />
                            </a>
                        </HeroStyledLi>
                        <HeroStyledLi>
                            <a target='_blank' href='https://www.instagram.com/jrdubina/'>
                                <FontAwesomeIcon icon={['fab', 'instagram']} className='fontAwesomeIcon' />
                            </a>
                        </HeroStyledLi>
                        <HeroStyledLi>
                            <a target='_blank' href='https://www.linkedin.com/in/jareddubina/'>
                                <FontAwesomeIcon icon={['fab', 'linkedin']} className='fontAwesomeIcon' />
                            </a>
                        </HeroStyledLi>
                        <HeroStyledLi>
                            <a target='_blank' href='https://github.com/jrdubina'>
                                <FontAwesomeIcon icon={['fab', 'github']} className='fontAwesomeIcon' />
                            </a>
                        </HeroStyledLi>
                        <HeroStyledLi>
                            <a target='_blank' href='https://www.joinclubhouse.com/app'>
                                Clubhouse
                            </a>
                        </HeroStyledLi>
                    </ul>
                </div>
            </Container>
        </HeroStyledWrapper>
    );
}

Hero.propTypes = {

}