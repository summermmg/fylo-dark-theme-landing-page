import styled from 'styled-components';
import { Container } from '../Global';

export const StyledInfoSection = styled.div`
    color: hsl(0, 0%, 100%);
    background: ${({lightBg}) => lightBg ? '#fff' : 'hsl(219, 30%, 18%)'};
    padding: 50px 0;
    overflow: hidden;
    @media screen and (min-width: 768px) {
        height: 80vh;
    }
`

export const InfosectionContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    ${Container}
`

export const InfoRow = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ imgStart }) => imgStart ? 'row-reverse' : 'row'};
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const InfoColumn = styled.div`
    margin-bottom: 1rem;
    flex: 1;
    max-width: 50%;    

    @media screen and (max-width: 768px) {
        max-width: 100%;
        display: flex;
        justify-content: center;
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-bottom: 60px;
`

export const TopLine = styled.div`
    color: ${({lightTopLine}) => lightTopLine ? '#a9b3c1' : 'hsl(217, 28%, 15%)'};
    font-size: 1rem;
    line-height: 1rem;
    letter-spacing: 1.5px;
    margin-bottom: 1rem;
`

export const Heading = styled.h1`
    margin-bottom: 25px;
    font-size: 2rem;
    line-height: 1.2;
    color: ${({lightText}) => lightText ? '#f7f8fa' : 'hsl(217, 28%, 15%)'};
`

export const InfoDescription = styled.p`
    max-width: 400px;
    margin-bottom: 30px;
    font-size: 1rem;
    line-height: 1.2rem;
    color: ${({lightTextDesc}) => lightTextDesc ? '#a9b3c1' : 'hsl(217, 28%, 15%)'};
`

export const ImageWrapper = styled.div`
    max-width: 550px;
    display: flex;
    flex-direction: ${({start}) => start ? 'flex-start' : 'flex-end'};
`

export const Image = styled.img`
    width: 100%;
`