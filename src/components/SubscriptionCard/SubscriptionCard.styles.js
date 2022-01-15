import styled from 'styled-components';
import { Container } from '../Global';

export const StyledSubCard = styled.div`
    color: hsl(0, 0%, 100%);
`

export const SubCardContainer = styled(Container)`
    max-width: 800px;
    padding: 50px;
    background: hsl(219, 30%, 18%);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    text-align: center;

    @media screen and (max-width: 768px) {
        width: 80%;
        margin: 0 auto;
        padding: 30px;
    }

    ${Container}
`

export const SubCardHeading = styled.h2`
    color: #f7f8fa;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`

export const SubCardText = styled.p`
    font-size: 0.8rem;
    line-height: 1.4rem;
    margin: 1.2rem 0;

    @media screen and (max-width: 768px) {
        font-size: 0.7rem;
    }
`

export const Form = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const FormInput = styled.input`
    border-radius: 1.2rem;
    border: 1px solid #fff;
    font-size: 1rem;
    padding: 10px 30px;
    outline: none;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`