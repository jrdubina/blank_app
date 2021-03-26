import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import AOS from 'aos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { 
    faChartBar, 
    faCode, 
    faLightbulb, 
    faBriefcase, 
    faBrain, 
    faPuzzlePiece 
} from '@fortawesome/free-solid-svg-icons';
import { faRebel } from '@fortawesome/free-brands-svg-icons';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'aos/dist/aos.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

library.add([faChartBar, faCode, faLightbulb, faBriefcase, faBrain, faPuzzlePiece, faRebel]);

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

AOS.init();

const StyledWrapper = styled.div`
    background: #f7f7f7;
    position: relative;
    padding-bottom: 80px;

    .skillsHeading {
        margin: 10px 0;
        position: relative;
        font-size: 13px;
        color: #292929;
        letter-spacing: 0.1em;
        font-weight: 500;
        text-transform: uppercase;
        display: block;
    }

    .swiper-wrapper {
        margin-bottom: 55px;
    }

    .skills-block {
        .separator {
            margin: 0;
            font-size: 13px;
            line-height: 22px;
            color: #999999;
        }

        .fontAwesomeIcon {
            color: #b8a07e;
            line-height: 44px;
        }
    }

    .swiper-pagination {
        .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background-color: #fff;
            opacity: 1;
            border: 1px solid #b8a07e;
        }

        .swiper-pagination-bullet-active  {
            background-color: #b8a07e;
        }
    }
`;

export const Skills = ({  }) => {
    return (
        <StyledWrapper>
            <Container>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    autoplay={true}
                    className='skills-block'
                    data-aos='fade-up'
                    data-aos-anchor-placement='bottom-bottom'
                    data-aos-delay='100'
                >
                    <SwiperSlide>
                        <FontAwesomeIcon icon={['fas', 'chart-bar']} size='3x' className='fontAwesomeIcon' />
                        <p className='skillsHeading'>Data Driven</p>
                        <p className='separator'>Analyse data to determine the best architecture for the project or make informed pivots.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <FontAwesomeIcon icon={['fas', 'code']} size='3x' className='fontAwesomeIcon' />
                        <p className='skillsHeading'>TDD</p>
                        <p className='separator'>Principled test driven development, ensuring all test cover acceptance criteria before development begins.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <FontAwesomeIcon icon={['fas', 'lightbulb']} size='3x' className='fontAwesomeIcon' />
                        <p className='skillsHeading'>Innovative</p>
                        <p className='separator'>Recognized with multiple awards for innovative ideas. Im a believer in what Peter Drucker famously said "Innovate or die".  </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <FontAwesomeIcon icon={['fas', 'briefcase']} size='3x' className='fontAwesomeIcon' />
                        <p className='skillsHeading'>Collaborator</p>
                        <p className='separator'>Whether I'm collaborating with my team or cross team collaboration, I enjoy fresh ideas and perspectives that I wouldn't have thought of.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <FontAwesomeIcon icon={['fas', 'brain']} size='3x' className='fontAwesomeIcon' />
                        <p className='skillsHeading'>Continuous Learning</p>
                        <p className='separator'>I find myself always digging into new packages, courses or personal projects. I'm always looking to learn something new each day.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <FontAwesomeIcon icon={['fas', 'puzzle-piece']} size='3x' className='fontAwesomeIcon' />
                        <p className='skillsHeading'>Problem Solver</p>
                        <p className='separator'>Always looking for a problem and challenge that requires me to find a creative solution.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <FontAwesomeIcon icon={['fab', 'rebel']} size='3x' className='fontAwesomeIcon' />
                        <p className='skillsHeading'>Rebel Alliance</p>
                        <p className='separator'>"Do or do not, there is no try" - Yoda</p>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </StyledWrapper>
    );
}

Skills.propTypes = {

}