import styled from 'styled-components';

export const HeroStyledWrapper = styled.div`
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

export const HeroStyledLi = styled.li`
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