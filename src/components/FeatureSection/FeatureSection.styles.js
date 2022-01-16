import styled from 'styled-components';
import { Container } from '../Global';

export const StyledFeatureCard = styled.div`
    color: hsl(0, 0%, 100%);
    background: 'hsl(217, 28%, 15%)';
    max-width: 800px;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 30px;
    
    @media screen and (max-width: 768px) {
        /* height: 70vh; */
    }
`

export const FeatureCardContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;

    ${Container}
`
