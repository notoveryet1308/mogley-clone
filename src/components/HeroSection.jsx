import React, { useState, useEffect } from 'react'
import { Container } from '../styles/globalStyle';
import pic_large_1 from './../img/pic_large_1.jpg';
import pic_large_2 from './../img/pic_large_2.jpg';
import pic_large_3 from './../img/pic_large_3.jpg';
import pic_large_4 from './../img/pic_large_4.jpg';
import { IMG } from '../styles/style-homepage/heroStyle';


const images = [pic_large_1, pic_large_2, pic_large_3, pic_large_4];
function HeroSection() {

    const [pic, setPic] = useState(images[0]);
    useEffect(() => {
        let i = 1;
        // let oldInterval = 0
        const picInterval = setInterval(() => {
            if (i < 4) {
                setPic(images[i]);
                i++;
            }
            else { i = 0; }
        }, i * 4000);

        // clearInterval(oldInterval);
        // oldInterval = picInterval;
        return () => clearInterval(picInterval);
    }, []);

    return (
        <Container herobox>
            <IMG src={pic} alt='Pic-1' />
        </Container>
    )
}

export default HeroSection;
