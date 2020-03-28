import styled from 'styled-components';

export const LetterWrapper = styled.div`
    width: 65%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 720px){
        width: 90%;
        text-align: center;
    }

`

export const Text = styled.p`
   font-size: 2rem;
   font-family: 'roboto';
   color: #fff;
   
   @media (max-width: 720px){
        font-size: 1.6rem;
    }
`
