import styled from 'styled-components';

export const NavStyledWrapper = styled.header`
    transition: all 0.5s;
    z-index: 997;
    padding: 15px 0;
    background-color: #fff;
    box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.08);

    .logo {
        font-size: 30px;
        margin: 0;
        padding: 0;
        line-height: 1;
        font-weight: 600;
        letter-spacing: 1px;
        font-family: "Playfair Display", sans-serif;
        font-style: italic;

        a {
            color: #898989;
        }
    }

    @media (max-width: 992px) {
          border: 0;
    }
`;

export const MenuStyledWrapper = styled.nav`
    padding: 0;

    ul {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
        align-items: center;
    }

    li {
        position: relative;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0 10px 30px;
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 500;
        color: #7e7d7d;
        white-space: nowrap;
        transition: 0.3s;

        i {
            font-size: 12px;
            line-height: 0;
            margin-left: 5px;
        }
    }

    a:hover, .active, li:hover > a {
        color: #b8a07e;
    }

    .dropdown {
        ul {
            display: block;
            position: absolute;
            left: 30px;
            top: calc(100% + 30px);
            margin: 0;
            padding: 10px 0;
            z-index: 99;
            opacity: 0;
            visibility: hidden;
            background: #fff;
            box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
            transition: 0.3s;

            li {
                min-width: 200px;
            }

            a {
                padding: 10px 20px;
                font-weight: 400;

                i {
                    font-size: 12px;
                }
            }

            a:hover, .active:hover, li:hover > a {
                color: #b8a07e;
            }
        }

        .dropdown {

            ul {
                top: 0;
                left: calc(100% - 30px);
                visibility: hidden;
            }
        }

        .dropdown:hover > ul {
            opacity: 1;
            top: 0;
            left: 100%;
            visibility: visible;
        }
    }

    .dropdown:hover > ul {
        opacity: 1;
        top: 100%;
        visibility: visible;
    }

    @media (max-width: 1366px) {
        .dropdown .dropdown ul {
            left: -90%;
        }

        .dropdown .dropdown:hover > ul {
            left: -100%;
        }
    }
`;