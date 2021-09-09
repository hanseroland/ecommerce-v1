import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {MdArrowBack,MdArrowForward} from 'react-icons/md'



export const NavPub = styled.nav`
background-color: #632ce4;
height: 50px;
/*margin-top:-80px;*/
display:flex;
justify-content:center;
align-items:center;
font-size:1rem;
top:0;
/*box-shadow: 0 6px 20px rgba(10, 10, 10, 0.1);*/

@media screen and (max-width:960px){
    transition: 0.8s all ease;
}
`

export const LogoImg = styled.img`
 width:195px;
 height:100px;
`
export const NavPubContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height:99px; 
    z-index:1 ;
    width:100%;
    padding: 0 24px;
    max-width: 1100px;

`

export const NavPubLogo = styled(Link)`

    color: #ffffff;
    justify-self:flex-start;
    cursor: pointer;
    font-size:1.5em;
    display:flex;
    align-items:center;
    margin-left:24px;
    font-weight:bold;
    text-decoration:none;

    @media screen  and (max-width:768px){
            margin-left:14px;
            font-size:1.5em;
        }


`
export const MobileIcon = styled.div`
    display:none;
    
    @media screen  and (max-width:768px){
        display:block;
        position:absolute;
        top:0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor:pointer;
        color:#fff;
    }
`

export const NavPubMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    width: 80%;
    margin-left: 22px;
    color: #fff;

    @media screen  and (max-width:768px){
        display:none;
    }
` 

export const NavPubImg = styled.img`
    width:100%;
    height:100%;
`


export const NavBtn = styled.nav`
    display:flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display:none;
    }
`

export const NavBtnLink = styled(Link)`
    
    white-space: nowrap;
    padding: 8px 20px;
    color: #fbf000;
    font-size: 16px;
    outline: none;
    margin-right: 3px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    border: 1px solid #fbf000;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fbf000;
        color:#1a1359;
    }


    @media screen and (max-width: 950px){
        padding: 5px 12px;
        font-size: 12px;
    }

`

export const ArrowForward = styled(MdArrowForward)`
    margin-left:8px;
    font-size:20px;
`
export const ArrowLeft = styled(MdArrowBack)`
    margin-left:8px;
    font-size:20px;
`

export const ButtonBack = styled.button`
        background: ${({primary}) => (primary ? '#fbf000' : '#fbf000')};
        white-space:nowrap;
        padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
        color : ${({blue}) => (blue ? '#1a1359' : '#1a1359')};
        font-size: ${({fontBig})=> (fontBig ? '20px' : '16px')};
        outline: none;
        border:none; 
        cursor:pointer;
        display:flex;
        justify-content:center;
        align-items: center;
        transition: all 0.2s ease-in-out;

        &:hover {
            transition: all 0.2s ease-in-out;
            background:  ${({primary}) => (primary ? '#1a1359' : '#fff')};
            color:#fff
        }
`