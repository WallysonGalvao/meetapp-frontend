import styled from 'styled-components';
import { lighten } from 'polished';

export const Loading = styled.strong`
    display: flex;
    justify-content: center;
    align-self: center;
    font-size: 25px;
    color: #fff;
    margin-top: 30px;
`;

export const Container = styled.div`
    max-width: 900px;
    margin: 15px auto;
    display: flex;
    flex-direction: column;

    strong {
        font-size: 30px;
        color: #fff;
    }

    img {
        border-radius: 4px;
        height: 200px;
        object-fit: fill;
    }

    p {
        margin-top: 20px;
        font-size: 18px;
        color: #fff;
    }

    span {
        font-size: 15px;
        font-weight: bold;
        color: #eee;
    }

    .teste {
        margin-top: 15px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`;

export const ButtonContainer = styled.div`
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    button {
        margin-left: 10px;
        padding: 10px;
        height: 33px;
        background: #d44059;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 12px;
        transition: background 0.2s;
        &:hover {
            background: ${lighten(0.05, '#d44059')};
        }
        &:disabled {
            opacity: 0.7;
            cursor: wait;
        }
    }
`;
