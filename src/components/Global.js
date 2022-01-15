import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Raleway:wght@400;700&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
    }
`
export const Container = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 50px;

    @media screen and (max-width: 991px) {
        padding: 0 30px;
    }
`

export const StyledButton = styled.button`
    border-radius: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    background: ${({primary}) => primary ? 'hsl(198, 60%, 50%)' : 'hsl(176, 68%, 64%)'};
    padding: ${({big}) => big ? '10px 60px' : '10px 20px'};
    font-size: ${({fontBig}) => fontBig ? '20px': '16px'};
    color: hsl(0, 0%, 100%);
    white-space: nowrap;

    &:hover {
        transition: all 0.3s ease-out;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`


export default GlobalStyles;