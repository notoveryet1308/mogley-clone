import React from 'react'
import { Container, Link } from '../styles/globalStyle';
import {FooterWrapper, LinkWrapper, Copyright} from './../styles/style-homepage/footerStyle';

function Footer() {
    return (
        <Container footer>
            <FooterWrapper>
                <LinkWrapper>
                   <Link footerlink>Work</Link>
                   <Link footerlink>Store</Link>
                   <Link footerlink>About</Link>
                   <Link footerlink>Contact</Link>
                   <Link footerlink>Gig poster</Link>
                </LinkWrapper>
                <Copyright>
                &copy; &nbsp; 2020 Nicholas Moegly. All Rights Reserved.
                </Copyright>
            </FooterWrapper>
        </Container>
    )
}

export default Footer
