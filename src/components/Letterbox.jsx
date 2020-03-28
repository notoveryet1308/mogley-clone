import React from 'react'
import { Container, HeadingH1, Input, Button } from '../styles/globalStyle'
import { LetterWrapper, Text } from '../styles/style-homepage/letterboxStyle'

function Letterbox() {
    return (
        <Container letterbox>
            <LetterWrapper>
                <HeadingH1 maillist>
                    Mailing List
                </HeadingH1 >
                <Text>
                    Get updates on new projects and products – including mailing list only discounts in the store.
                </Text>
                <Input placeholder='Your Email Address'/>
                <Button>Sign Up</Button>
            </LetterWrapper>
        </Container>
    )
}

export default Letterbox
