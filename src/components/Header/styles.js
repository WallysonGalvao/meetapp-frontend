import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
    background: ${lighten(0.1, '#000')};
    padding: 0 30px;

    button {
        display: flex;
        align-items: center;
        border: none;
        background: transparent;
        color: #d44059;
        font-weight: bold;
        font-size: 15px;

        svg {
            margin-right: 2px;
            transition: transform 0.2s;
        }

        &:hover svg {
            transform: translateX(-2px);
        }
    }
`;
export const Content = styled.div`
    height: 64px;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav {
        display: flex;
        align-items: center;
        img {
            margin-right: 20px;
            padding-right: 20px;
            border-right: 1px solid #ccc;
        }
        span {
            font-weight: bold;
            color: #d44059;
            font-size: 20px;
        }
    }

    div {
        display: flex;

        > span {
            color: #fff;
        }

        strong {
            display: block;
            color: #fff;
            font-size: 15px;
            align-content: flex-end;
            margin-right: 10px;
        }

        button {
            border: none;
            border-radius: 4px;
            background: #d44059;
            padding: 10px 25px;
            color: #fff;
            font-weight: bold;

            &:hover {
                background: ${lighten(0.05, '#d44059')};
            }
        }
    }
`;

export const WrapperProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;

    span {
        margin-right: 10px;
        font-size: 12px;
        color: #ccc;
    }
`;
