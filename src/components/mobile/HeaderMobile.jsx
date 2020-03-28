import React from 'react'
import {HeaderMobileContainer} from './../../styles/style-homepage/headerStyle';
import Logo from './../../img/logo.png';
function HeaderMobile() {
    return (
       <HeaderMobileContainer>
           <img src={Logo} width='70px' alt='Logo' />
           <i className="fas fa-bars"></i>
       </HeaderMobileContainer>
    )
}

export default HeaderMobile
