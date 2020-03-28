import styled, {
    createGlobalStyle,
    css
} from 'styled-components';

export const GlobalStyle = createGlobalStyle `
   *{
       padding: 0;
       margin:0;
       box-sizing: border-box;
   }
   html{
       font-size:62.5%;
       font-family: 'Libre Baskerville', serif;
   }
`

export const Container = styled.div `
   width:100%;
   position: relative;
   font-family:'Libre Baskerville', serif;
   ${props => props.herobox && css`
       overflow: hidden;
       height: 99vh;
       background: #333;
      

       @media (max-width: 320px){
           height:50vh;
           width: 320px;
           overflow: hidden;
       }

   `}
   ${props => props.gallery && css`
       margin-top: 5rem;
       background: #fff;
   `}
   ${props => props.letterbox && css`
       background: transparent;
   `}
   ${props => props.footer && css`
       background: #eee;
       height: 150px;
       margin-top: 5rem;
   `}
`
export const Link = styled.a`
   cursor:pointer;
   text-decoration: none;
   color: #000;
   font-size: 1.4rem;
   text-transform: uppercase;
   letter-spacing: 3px;
   font-family:'roboto';
   ${props=> props.footerlink && css`
       color: #D2B24E;
   `}
`
export const Wrapper = styled.div `
   width: 145px;
   margin-left: 2rem;
   text-align: center;
   ${props => props.flex && css`
              display:flex;
              justify-content: space-between;
              align-items: center;
              `}
    ${props => props.logobox && css`
              margin-left: 6rem;
    `}
    .fab{
        cursor:pointer;
        color: #D2B24E;
        font-size: 2rem;
        margin-right: 2rem;
    }
    .fab:hover{
        color: #E1C673;
        transition: all 300ms ease;
    }

`
export const HeadingH1 = styled.h1 `
    color: #444444;
    font-weight: 400;
    font-size: 3rem;
    ${props => props.maillist && css`
        margin-top: 2rem;
        font-size: 2rem;
        font-family: 'roboto';
        text-transform: uppercase;
        color: #fff;
        letter-spacing: 2px;
        &::after{
            content:'';
            width: 100%;
            margin: 1rem auto;
            height: 4px;
            background-color: #fff;
            display:block;

        }
    
    `}
    @media (max-width: 720px){
        font-size: 2rem;
    }

`
export const Input = styled.input`
    width: 350px;
    height: 50px;
    margin: 3rem 0;
    background: #fff;
    padding: .5rem 1rem;
    color: gray;
    font-size: 1.7rem;
    border: none;
    outline: none;
    &::placeholder{
        color: #333;
        font-size: 1.7rem;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    @media (max-width: 720px){
        width: 200px;
        height: 40px;
        margin: 1rem 0;
        
    }
`
export const Button = styled.button`
   width: 350px;
   height: 40px;
   background: transparent;
   border: none;
   border: 2px solid #fff;
   cursor: pointer;
   font-size: 2rem;
   color: #fff;
  
`