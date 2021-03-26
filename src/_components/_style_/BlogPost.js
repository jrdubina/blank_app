import styled from 'styled-components';

export const BlogStyledWrapper = styled.div`
    height: auto;
    width: 100%;
    background: #f7f7f7;
    padding-top: 90px;
    padding-bottom: 50px;
    position: relative;

    .blog-block {
        display: inline-block;
        height: auto;
        width: 100%;

        .blog-info {
            position: relative;

            img {
                max-width: 100%;
            }

            .blog-txt {
                padding: 25px 0px;
                position: relative;

                h4 a {
                    display: block;
                    font-size: 19px;
                    line-height: 24px;
                    margin: 0 0 13px 0;
                    font-weight: 500;
                    color: #292929;
                    transition: all 0.5s ease-in-out 0s;
                    text-decoration: none;
                }

                h4 a:hover {
                    color: #b8a07e;
                    transition: all 0.5s ease-in-out 0s;
                }

                p {
                    margin: 0;
                    font-size: 14px;
                    line-height: 24px;
                }
            }
        }
    }
`;