import React from 'react'
import { Container, HeadingH1 } from '../styles/globalStyle';
import { GalleryGrid, GalleryImg, GalleryWrapper } from './../styles/style-homepage/galleryStyle';

import pic_1 from './../img/pic_1.jpg';
import pic_2 from './../img/pic_2.jpg';
import pic_3 from './../img/pic_3.jpg';
import pic_4 from './../img/pic_4.jpg';
import pic_5 from './../img/pic_5.jpg';
import pic_6 from './../img/pic_6.jpg';
import pic_7 from './../img/pic_7.jpg';
import pic_8 from './../img/pic_8.jpg';
import pic_9 from './../img/pic_9.jpg';
function Gallery() {
    return (
        <Container gallery>
            <GalleryWrapper>
               <HeadingH1>Nicholas Moegly is a freelance illustrator, lettering artist and graphic designer.</HeadingH1>
            </GalleryWrapper>
            <GalleryGrid>
                <GalleryImg img_1 src={pic_1} alt='Pic-1' />
                <GalleryImg img_2 src={pic_2} alt='Pic-2' />
                <GalleryImg img_3 src={pic_3} alt='Pic-3' />
                <GalleryImg img_4 src={pic_4} alt='Pic-4' />
                <GalleryImg img_5 src={pic_5} alt='Pic-5' />
                <GalleryImg img_6 src={pic_6} alt='Pic-6' />
                <GalleryImg img_7 src={pic_7} alt='Pic-7' />
                <GalleryImg img_8 src={pic_8} alt='Pic-8' />
                <GalleryImg img_9 src={pic_9} alt='Pic-9' />

            </GalleryGrid>
        </Container>
    )
}

export default Gallery;
