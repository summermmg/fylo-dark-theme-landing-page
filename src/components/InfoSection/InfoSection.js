import React from 'react';
import { StyledButton } from '../Global';
import {Link} from 'react-router-dom';
import { 
    StyledInfoSection,
    InfosectionContainer,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    InfoDescription,
    ImageWrapper,
    Image
} from './InfoSection.styles';

const InfoSection = ({
    lightBg, 
    imgStart, 
    lightTopLine, 
    lightText, 
    lightTextDesc, 
    primary,
    topLine,
    heading,
    description,
    buttonLabel,
    image,
    start
}) => {
    return (
        <StyledInfoSection lightBg={lightBg}>
            <InfosectionContainer>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{heading}</Heading>
                            <InfoDescription lightTextDesc={lightTextDesc}>{description}</InfoDescription>
                            <Link to="/">
                                <StyledButton primary={primary} big fontBig>
                                    {buttonLabel}
                                </StyledButton>
                            </Link>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImageWrapper >
                            <Image src={image} alt="" />
                        </ImageWrapper>
                    </InfoColumn>
                </InfoRow>
            </InfosectionContainer>
        </StyledInfoSection>
    );
};

export default InfoSection;
