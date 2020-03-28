import styled, {css} from 'styled-components';

export const GalleryGrid = styled.div `
    display: grid;
    grid-template-columns: [full-start] 2.2rem [content-start img-1-start] repeat(3, 14rem) [img-1-end] 2.2rem [img-2-start] repeat(3, 14rem) [img-2-end] 2.2rem [img-3-start] repeat(3, 14rem) [img-3-end] 2.2rem [full-end];
    grid-template-rows:  3rem repeat(18, 3rem) 3rem repeat(18, 3rem) 3rem repeat(18, 3rem) 3rem;
   @media (max-width: 720px){
       margin: 0 1rem;
       display: flex;
       flex-direction: column;

   }    
`

export const GalleryImg= styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    ${props => props.img_1 && css`
        grid-column: img-1-start / img-1-end;
        grid-row: 2/ 20;
    `}
    ${props => props.img_2 && css`
        grid-column: img-1-start / img-1-end;
        grid-row: 21/ 40;
    `}
    ${props => props.img_7 && css`
        grid-column: img-1-start / img-1-end;
        grid-row: 41/ 58;
    `}
    ${props => props.img_3 && css`
        grid-column: img-2-start / img-2-end;
        grid-row: 2/ 18;
    `}
    ${props => props.img_4 && css`
        grid-column: img-2-start / img-2-end;
        grid-row: 19/ 37;
    `}
    ${props => props.img_8 && css`
        grid-column: img-2-start / img-2-end;
        grid-row: 38/ 55;
    `}
    
    ${props => props.img_5 && css`
        grid-column: img-3-start / img-3-end;
        grid-row: 2/ 20;
    `}
    
    ${props => props.img_6 && css`
        grid-column: img-3-start / img-3-end;
        grid-row:  21/ 40;;
    `}
    ${props => props.img_9 && css`
        grid-column: img-3-start / img-3-end;
        grid-row:  41/ 58;
    `}

    @media (max-width: 720px){
        
        margin: 1rem 0;
    }
`

export const GalleryWrapper = styled.div`
    width: 50%;
    margin: 3rem auto;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media (max-width: 720px){
        width: 100%;
        margin: 2rem 0;
    }
`
