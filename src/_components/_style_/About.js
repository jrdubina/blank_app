import styled from 'styled-components';

export const AboutStyledWrapper = styled.div`
    width: 100%;
    height: auto;
    background: #f7f7f7;
    padding-top: 210px;
    padding-bottom: 90px;

    .div-img-bg {
        padding-bottom: 30px;
        border: 20px solid #b8a07e;

        img {
            width: 100%;
            box-shadow: 0px 0px 85px 0px rgba(0, 0, 0, 0.14);
            margin-top: -60px;
            margin-left: 40px;
            height: 400px;
            -o-object-fit: cover;
            object-fit: cover;
        }
    }

    .p-heading {
        font-family: 'Playfair Display', serif;
        font-size: 28px;
        text-align: left;
        color: #999999;
    }

    .separator {
        max-width: 80%;
        margin-bottom: 0;
        text-align: left;
        color: #999999;
    }
`;