import React from 'react'
import { Icon, FeatureCardContainer } from './FeatureCard.styles'

const FeatureCard = ({ iconPath, topLine, description}) => {
    return (
        <FeatureCardContainer>
            <Icon src={iconPath} alt="" />
            <h1>{topLine}</h1>
            <p>{description}</p>
        </FeatureCardContainer>
    )
}

export default FeatureCard
