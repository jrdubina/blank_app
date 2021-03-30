import styled from 'styled-components';

export const FooterStyledWrapper = styled.div`
    background: #f7f7f7;
    padding-top: 50px;
    padding-bottom: 50px;

    .socials-media {
        width: 100%;

        ul {
            display: inline-block;
            float: none;
            margin: 0 0 20px 0;

            li {
                float: left;
                margin-left: 10px;
                margin-right: 10px;

                a {
                    font-size: 24px;
                    color: #999;
                    letter-spacing: 0.1em;
                    font-weight: 500;
                    background: transparent;
                    text-transform: uppercase;
                    transition: all 0.5s ease-in-out 0s;
                }

                a:hover {
                    color: #b8a07e;
                    transition: all 0.5s ease-in-out 0s;
                }
            }
        }
    }

    p {
        font-size: 12px;
        letter-spacing: 0.1em;
        font-weight: 500;
        margin-top: 0;
        text-transform: uppercase;
    }
`;