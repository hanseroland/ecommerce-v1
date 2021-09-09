import styled from 'styled-components'

export const InfoContainer = styled.div`
    margin-top: 20px;
    border: 1px solid #dddddd;
    color:#fff;
    padding: 10px;
    background:  ${({lightBg}) => (lightBg ? '#f9f9f9' : '#c7c7c7')};

    @media screen and (max-width: 768px){
        padding:100px 0;
      
    }
`

export const InfoWrapper = styled.div`
       max-height: 100%;
       width: 100%;
       margin-left:auto;
       padding: 30 24px;
       justify-content: center;

       @media screen and (max-width: 768px){
       height: 100%;
    }
`

export const InfoRow =styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items:center;
    grid-template-areas: ${({imgStart})=> (imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px){
       grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1'  'col2 col2' ` )};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2; 
`

export  const TextWrapper = styled.div`
    max-width: 540px;
    padding-top:0;
    padding-bottom: 60px;

    @media screen and (max-width: 480px){
       
        max-width: 300px;
        padding-bottom: 30px;
    }


`

export const TopLine = styled.p`
    color: #008647;
    font-size:16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#1a1359;' : '#fbf000')};

    @media screen and (max-width: 480px){
        font-size:32px
    }

`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    text-align:justify;
    color: ${({darkText}) => (darkText ? '#fbf000' : "#1a1359")};

    @media screen and (max-width: 380px){
     font-size: 15px;
       max-width: 300px;
    }
    
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;

`



export const Img = styled.img`
    width:100%;
    height:100%;
    margin: 0 0 -4px 0;
    padding-right: 0;
`