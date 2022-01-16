import styled from 'styled-components';

export const FeatureCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 50%;
    padding: 0 50px;
    margin-bottom: 50px;

    h1 {
        font-size: 1rem;
        line-height: 1.2rem;
        margin-bottom: 18px;
    }

    p {
        font-size: 0.7rem;
        line-height: 1rem;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 50px;
    }
`

export const Icon = styled.img`
    width: 40%;
    margin-bottom: 20px;
`
