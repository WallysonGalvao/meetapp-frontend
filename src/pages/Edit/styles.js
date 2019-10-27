import styled from 'styled-components';
import { Input } from '@rocketseat/unform';
import { lighten } from 'polished';

export const TextArea = styled(Input)`
    background: rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 4px;
    padding: 5px 15px;
    color: #fff;
    margin: 0 0 10px;
    font-family: Roboto;
    &::placeholder {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.7);
    }
`;

export const Container = styled.div`
    padding: 0 30px;

    form {
        max-width: 900px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            background: rgba(0, 0, 0, 0.1);
            border: none;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px;
            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20%;
            align-self: flex-end;
            background: #d44059;
            font-weight: bold;
            color: #fff;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;
            padding: 10px;
            &:hover {
                background: ${lighten(0.05, '#d44059')};
            }
            &:disabled {
                opacity: 0.7;
                cursor: wait;
            }

            svg {
                margin-right: 5px;
            }
        }

        span {
            color: ${lighten(0.1, '#f64c75')};
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
            font-size: 11px;
        }
    }
`;
