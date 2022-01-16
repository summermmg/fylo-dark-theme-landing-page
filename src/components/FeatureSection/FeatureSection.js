import React from 'react'
import {
    StyledFeatureCard,
    FeatureCardContainer
} from './FeatureSection.styles'
import {card1, card2, card3, card4} from './data';
import FeatureCard from './FeatureCard/FeatureCard'

const FeatureSection = () => {
    return (
        <StyledFeatureCard>
            <FeatureCardContainer>
                <FeatureCard {...card1} />
                <FeatureCard {...card2} />
                <FeatureCard {...card3} />
                <FeatureCard {...card4} />
            </FeatureCardContainer>            
        </StyledFeatureCard>
    )
}

export default FeatureSection
