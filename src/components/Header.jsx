import React from 'react'
import { Head, SubHead } from '../styles/style-homepage/headerStyle'
import { Wrapper, Link } from '../styles/globalStyle';
import Logo from './../img/logo.png';

function Header() {
    return (
        <Head>
            <SubHead>
                <Wrapper>
                    <Link>Work</Link>
                </Wrapper>
                <Wrapper>
                    <Link>Store</Link>
                </Wrapper>
                <Wrapper logobox>
                    <img src={Logo} width='80px' alt='Logo' />
                </Wrapper>
                <Wrapper>
                    <Link>ABout</Link>
                </Wrapper>
                <Wrapper>
                    <Link>Contact</Link>
                </Wrapper>

            </SubHead>
            <Wrapper flex>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook-f"></i>
            </Wrapper>

        </Head>
    )
}

export default Header
