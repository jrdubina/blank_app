import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FooterStyledWrapper } from './_style_';

export const Footer = ({ data = {} }) => {
    library.add([faFacebookF, faTwitter, faInstagram, faLinkedin, faGithub]);

    return (
        <FooterStyledWrapper className='text-center'>
            <Container>
                <div className='socials-media text-center'>
                    <ul className='list-unstyled'>
                        {
                            data?.icons?.map(icon => {
                                return (
                                    <li key={icon?.import}>
                                        <a target='_blank' href={icon?.url}>
                                            <FontAwesomeIcon icon={[icon?.abbreviation, icon?.name]} className='fontAwesomeIcon' />
                                        </a>
                                    </li>
                                )
                            })
                        }
                        <li>
                            <a target='_blank' href='https://www.joinclubhouse.com/app'>
                                Clubhouse
                            </a>
                        </li>
                    </ul>
                </div>
                <p>{data?.copyright}</p>
            </Container>
        </FooterStyledWrapper>
    );
}

Footer.propTypes = {
    data: PropTypes.object
}