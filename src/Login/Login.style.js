import styled from 'styled-components';

export const LoginBody = styled.div`
    font-family: Arial, Helvetica, sans-serif;
`;

export const LoginForm = styled.div`
    border: 3px solid #f1f1f1;
`;

export const LoginLabel = styled.label`
    font-weight: bold;
`;

export const LoginField = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
`;

export const LoginButton = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    &:hover{
        opacity: 0.8;
    }
`;

export const CancelButton = styled.button`
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
`;

export const Container = styled.button`
    padding: 16px;
`