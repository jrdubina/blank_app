import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Typist from 'react-typist';
import { HeroStyledLi, HeroStyledWrapper } from './_style_/Hero';

export const Hero = ({ data = {} }) => {
    library.add([faTwitter, faInstagram, faLinkedin, faGithub]);

    return (
        <HeroStyledWrapper className='home'>
            <Container>
                <div className='hero-content'>
                    <h1>{data?.header}
                        {
                            <Typist>
                                {
                                    data?.headerArr?.map((item, index) => {
                                        if (item.removeCount > 0) {
                                            return (
                                                <span key={`${item?.removeCount}${index}`}>
                                                    <span>{item?.text}</span>
                                                    <Typist.Backspace count={item?.removeCount} delay={1500} />
                                                </span>
                                            );
                                        }

                                        return <span key={`${item?.removeCount}${index}`}>{item?.text}</span>
                                    })
                                }
                            </Typist>
                        }
                    </h1>
                    <p>{data?.subheader}</p>
                    <ul className='list-unstyled list-social'>
                        {
                            data?.icons?.map(icon => {
                                return (
                                    <HeroStyledLi key={icon?.import}>
                                        <a target='_blank' href={icon?.url}>
                                            <FontAwesomeIcon icon={[icon?.abbreviation, icon?.name]} className='fontAwesomeIcon' />
                                        </a>
                                    </HeroStyledLi>
                                )
                            })
                        }
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
    data: PropTypes.object
}