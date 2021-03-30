import styled from 'styled-components';

export const ContactStyledWrapper = styled.div`
    height: auto;
    width: 100%;
    padding-top: 90px;
    padding-bottom: 90px;

    .btn {
        background: #333;
        border: medium none;
        border-radius: 0;
        color: #fff;
        font-size: 12px;
        height: 50px;
        line-height: 50px;
        padding: 0 30px;
        text-transform: uppercase;
    }

    .form-control {
        display: block;
        padding: .375rem .75rem;
        background-clip: padding-box;
        appearance: none;
        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        background-color: transparent;
        border: 1px solid #999;
        border-radius: 0;
        color: #999999;
        font-size: 12px;
        font-weight: 500;
        height: 50px;
        letter-spacing: 0.1em;
        padding-left: 10px;
        margin: 0 0 25px 0;
        line-height: 14px;
        text-transform: uppercase;
    }

    input, textarea {
        width: 100%;
        margin-bottom: 5px;
    }

    textarea {
        min-height: 160px;
    }

    .error-message {
        display: none;
        color: #fff;
        background: #ed3c0d;
        text-align: left;
        padding: 15px;
        margin-bottom: 15px;
        font-weight: 600;

        br + br {
            margin-top: 25px;
        }
    }

    .sent-message {
        display: none;
        color: #fff;
        background: #18d26e;
        text-align: center;
        padding: 15px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    .loading {
        display: none;
        background: #fff;
        text-align: center;
        padding: 15px;
        margin-bottom: 15px;
    }

    .loading:before {
        content: "";
        display: inline-block;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        margin: 0 10px -6px 0;
        border: 3px solid #18d26e;
        border-top-color: #eee;
        -webkit-animation: animate-loading 1s linear infinite;
        animation: animate-loading 1s linear infinite;
    }

    @-webkit-keyframes animate-loading {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    }
      
    @keyframes animate-loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;