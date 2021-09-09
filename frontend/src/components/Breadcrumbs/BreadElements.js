import styled from 'styled-components'

export const BreadSection = styled.nav`

    height: 45px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#f9f9f9;
    
    top:0;
    
    /*box-shadow: 0 6px 20px rgba(10, 10, 10, 0.1);*/

@media screen and (max-width:960px){
    transition: 0.8s all ease;
}
`

export const BreadContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height:41px;
    z-index:1 ;
    width:100%;
    max-width: 1100px;

`

export const BreadLinks = styled.div`

    justify-self:flex-start;
    display:flex;
    align-items:center;
    

    @media screen  and (max-width:768px){
            margin-left:14px;
           
        }
`
