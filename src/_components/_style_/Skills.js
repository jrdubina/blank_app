import styled from 'styled-components';

export const SkillsStyledWrapper = styled.div`
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