import styled, {
   css
} from 'styled-components';

export const Head = styled.header `
   position: fixed;
   width: 100%;
   display: flex;
   justify-content: space-between;
   height: 6.5rem;
   transition: height 300ms ease-in-out;
   z-index: 11;
   background-color: #fff;
    /* box-shadow: 0px 2px 8px -2px rgba(0,0,0,0.1);
     */
    box-shadow: 0px 2px 2px -1px rgba(28,26,28,.1);
   ${props => props.scrolled? css`
      height: 5rem;
      transition: height 300ms ease-in-out;
   `: null }

   @media (max-width: 720px) {
       display: none;
   }

`
export const SubHead = styled.div `
/* background: #eee; */
    padding: 0 2rem;
    width: 90%;
   /* margin: 0 auto; */
   margin-left: 5rem;
   display:flex;
   justify-content: center;
   align-items: center;
   
`

export const HeaderMobileContainer = styled.div `
   position: fixed;
   width: 100%;
   height: 50px;
   display: none;
   justify-content: space-between;
   align-items: center;
   padding: .5rem 1rem;
   z-index: 11;
   background: #fff;
   box-shadow: 0px 2px 2px -1px rgba(28,26,28,.1);
   .fas{
      font-size: 2.5rem;
      color: #D2B24E;
      margin: 0 1rem;
   }
   @media (max-width: 320px){
      width: 320px;
      display: flex;
      align-items: center;
   }
`