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
    color: #fff;

    img {
        border-radius: 4px;
        height: 200px;
        object-fit: fill;
        margin: 30px 0;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        font-weight: bold;
        color: #fff;
        font-size: 22px;
    }

    div {
        display: flex;

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 10px;
            padding: 5px;
            width: 100px;
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

            &.edit {
                /* background: blue; */
                background: ${lighten(0.05, 'blue')};
            }

            svg {
                margin-right: 5px;
            }
        }
    }
`;

export const InfoContainer = styled.div`
    margin-top: 30px;
    font-size: 12px;

    span {
        margin-right: 15px;

        svg {
            margin-right: 5px;
        }
    }
`;
