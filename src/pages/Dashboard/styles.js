import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
    padding: 0 30px;

    ul {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        max-width: 900px;
        margin: 0 auto;
    }
`;

export const Header = styled.div`
    max-width: 900px;
    margin: 0 auto;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
        font-size: 32px;
        color: #fff;
        font-weight: normal;
    }

    button {
        border: none;
        border-radius: 4px;
        background: #d44059;
        padding: 10px 25px;
        display: flex;
        align-items: center;
        color: #fff;
        font-weight: bold;

        svg {
            margin-right: 5px;
        }

        &:hover {
            background: ${lighten(0.05, '#d44059')};
        }
    }
`;

export const ItemMeetup = styled.li`
    padding: 20px;
    border-radius: 4px;
    margin-top: 10px;
    color: #fff;
    background: ${darken(0.05, '#36253D')};
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: normal;

        span {
            margin-right: 20px;
        }
    }
`;
