import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
    color: hsl(0, 0%, 100%);
    padding-bottom: 50px;
    padding-top: 300px;
    
    p {
        text-align: end;
    }

    @media screen and (max-width: 768px) {
        padding-top: 250px;

        p {
            margin-top: 1rem;
            text-align: center;
        }
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 0;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const FooterLinksItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media screen and (max-width: 768px) {
        margin: 1rem 0;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.p`
    margin-bottom: 1rem;
    border-bottom: 1px solid #fff;
`

export const FooterLink = styled(Link)`
    color: hsl(0, 0%, 100%);
    text-decoration: none;
    margin-bottom: 0.5rem;
`