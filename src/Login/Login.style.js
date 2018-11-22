import styled from 'styled-components';

export const LoginBody = styled.div`
    min-height: 100vh;
`;

export const LoginForm = styled.div`
    border: 3px solid #f1f1f1;
    display: flex;
    flex-direction: column;
    width: 350px;
`;

export const LoginItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const LoginLabel = styled.label`
    font-weight: bold;
    color: white;
`;

export const LoginField = styled.input`
    width: 300px;
    padding: 12px 20px;
    margin: 5px 0px 20px 0px;
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
    width: 300px;
    &:hover{
        opacity: 0.8;
    }
`;

export const Container = styled.div`
    padding: 16px;
`