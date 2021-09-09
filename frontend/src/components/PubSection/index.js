import React from 'react'
import {
    Column2,
    Img,
    ImgWrap,
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap

 } from './InfoElements';




const PubSection = (props) => {
    return (
        <>
            <InfoContainer lightBg={props.lightBg}  >
                    <InfoWrapper>
                        <InfoRow  imgStart={props.imgStart} >   
                            <Column1>
                              <TextWrapper>
                                  <Heading lightText={props.lightText}>{props.headLine}</Heading>
                              </TextWrapper>
                            </Column1>
                            <Column2> 
                                <ImgWrap>
                                   <Img src={props.img} alt={props.alt} />
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
            </InfoContainer>
        </>   
    )
}

export default PubSection
