import styled from 'styled-components'

export const InfoContainer = styled.div`
    margin-top: 20px;
    color:#fff;
    border: 1px solid #dddddd;
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