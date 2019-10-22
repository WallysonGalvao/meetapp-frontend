import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    span {
        margin-top: 10px;
        padding-top: 10px;
        margin-bottom: 10px;
    }

    label {
        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }
        img {
            flex: 1;
            background: #241c2b;
            height: 200px;
            border-radius: 4px;
            border: none;
            object-fit: fill;
        }
        input {
            display: none;
        }

        strong {
            position: absolute;
            color: #fff;
            font-size: 22px;
        }
    }
`;
