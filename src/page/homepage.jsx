import React from 'react'
import { Container } from '../styles/globalStyle'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Gallery from '../components/Gallery';
import Letterbox from '../components/Letterbox';
import Footer from '../components/Footer';
import HeaderMobile from '../components/mobile/HeaderMobile';

function Homepage() {

    return (
        <Container>
            <HeaderMobile />
            <Header />
            <HeroSection />
            <Gallery />
            <Letterbox />
            <Footer />
        </Container>
    )
}

export default Homepage
