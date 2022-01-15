import React from 'react'
import { Container } from '../Global'
import { 
    StyledFooter,
    FooterLinksWrapper,
    FooterLinksItem,
    FooterLinkTitle,
    FooterLink
} from './Footer.styles';
import SocialIcons from '../SocialIcons/SocialIcons';

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterLinksWrapper>
                    <FooterLinksItem>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItem>
                </FooterLinksWrapper>
                <SocialIcons />
                <p>&copy; 2022 Fylo. All rights reserved.</p>
            </Container>
        </StyledFooter>
    )
}

export default Footer
