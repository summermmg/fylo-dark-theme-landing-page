import React from 'react'
import {
    StyledSubCard,
    SubCardContainer,
    SubCardHeading,
    SubCardText,
    Form,
    FormInput
} from './SubscriptionCard.styles';
import { StyledButton } from '../Global';

const SubscriptionCard = () => {
    return (
        <StyledSubCard>
            <SubCardContainer>
                <SubCardHeading>
                    Get early access today
                </SubCardHeading>
                <SubCardText>
                    It only takes a minute to sign up and our free starter
                     tier is extremely generous. If you have any questions,
                      our support team would be happy to help you.
                </SubCardText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" />
                        <StyledButton primary fontBig>
                            Get Started For Free
                        </StyledButton>
                </Form>
            </SubCardContainer>            
        </StyledSubCard>
    )
}

export default SubscriptionCard