import styled from 'styled-components';

export const PortfolioStyledWrapper = styled.div`
    position: relative;
    padding-top: 90px;
    padding-bottom: 50px;

    .portfolio-container {
        margin-right: 0;
        margin-left: 0;

        .portfolio-item {
            display: block;
            position: relative;
            overflow: hidden;
            max-width: 530px;
            margin: auto auto 1rem;

            .caption {
                display: flex;
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                bottom: 0;
                z-index: 1;

                .caption-content {
                    color: #fff;
                    margin: auto 2rem 2rem;

                    h2 {
                        font-size: 0.8rem;
                        text-transform: uppercase;
                    }

                    p {
                        font-weight: 300;
                        font-size: 1.2rem;
                    }
                }
            }
        }

        @media (min-width: 992px) {
            .portfolio-item {
                max-width: none;
                margin: 0;

                .caption {
                    transition: background-color 0.7s, -webkit-clip-path 0.25s ease-out;
                    transition: clip-path 0.25s ease-out, background-color 0.7s;
                    transition: clip-path 0.25s ease-out, background-color 0.7s, -webkit-clip-path 0.25s ease-out;
                    -webkit-clip-path: inset(0px);
                    clip-path: inset(0px);

                    .caption-content {
                        transition: opacity 0.25s;
                        margin-left: 5rem;
                        margin-right: 5rem;
                        margin-bottom: 5rem;
                    }
                }

                img {
                    transition: -webkit-clip-path 0.25s ease-out;
                    transition: clip-path 0.25s ease-out;
                    transition: clip-path 0.25s ease-out, -webkit-clip-path 0.25s ease-out;
                    -webkit-clip-path: inset(-1px);
                    clip-path: inset(-1px);
                }
            }

            .portfolio-item:hover img {
                -webkit-clip-path: inset(2rem);
                clip-path: inset(2rem);

                .caption {
                    background-color: rgba(29, 128, 159, 0.9);
                    -webkit-clip-path: inset(2rem);
                    clip-path: inset(2rem);
                }
            }
        }
    }

    ul {
        padding: 0;
        margin: 0 auto 35px auto;
        list-style: none;
        text-align: center;
        border-radius: 50px;
        padding: 2px 15px;

        li {
            cursor: pointer;
            display: inline-block;
            padding: 10px 15px 8px 15px;
            font-size: 14px;
            font-weight: 600;
            line-height: 1;
            text-transform: uppercase;
            color: #999999;
            margin-bottom: 5px;
            transition: all 0.3s ease-in-out;
        }

        li:hover, li.filter-active {
            color: #b8a07e;
        }

        li:last-child {
            margin-right: 0;
        }
    }
`;