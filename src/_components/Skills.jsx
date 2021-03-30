import React from 'react';
import PropTypes from 'prop-types';
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
import { SkillsStyledWrapper } from './_style_/Skills';

export const Skills = ({ data = {} }) => {

    library.add([faChartBar, faCode, faLightbulb, faBriefcase, faBrain, faPuzzlePiece, faRebel]);

    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

    AOS.init();

    return (
        <SkillsStyledWrapper>
            <Container>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    autoplay={true}
                    className='skills-block'
                    data-aos='fade-up'
                    data-aos-anchor-placement='center-bottom'
                    data-aos-delay='500'
                >
                    {
                        data?.icons?.map(item => {
                            return (
                                <SwiperSlide key={item?.icon?.import}>
                                    <FontAwesomeIcon icon={[item?.icon?.abbreviation, item?.icon?.name]} size='3x' className='fontAwesomeIcon' />
                                    <p className='skillsHeading'>{item?.header}</p>
                                    <p className='separator'>{item?.bodyText}</p>
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </Container>
        </SkillsStyledWrapper>
    );
}

Skills.propTypes = {
    data: PropTypes.object
}