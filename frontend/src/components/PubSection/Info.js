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
 import { useSpring } from 'react-spring'
import {Button} from '../ButtonStyle';
import { ButtonLink } from '../ButtonLinkStyle';


/*export const homeObjOne = 
{
    id:'produits',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Vous êtes un recruteur ?',
    headLine: 'Vous pouvez publier des offres gratuitement',
    description: 'Accedez à votre interface de gestion des emplois publier vos offres sur le site et sur notre application mobile',
    buttonLabel: 'Commencez',
    imgStart: false,
    img: require('../../assets/images/workers.svg').default,
    alt: 'travailleurs',
    dark: true,
    primary: true,
    darkText: false
};*/
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`



const Info = (props, primary, dark, dark2) => {
    const [prop, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <>
            <InfoContainer lightBg={props.lightBg} id={props.id} >
                    <InfoWrapper>
                        <InfoRow  imgStart={props.imgStart} >   
                            <Column1>
                              <TextWrapper>
                                  <TopLine>{props.topLine}</TopLine>
                                  <Heading lightText={props.lightText}>{props.headLine}</Heading>
                                  <Subtitle  darkText={props.darkText}>{props.description}
                                    <ul>
                                        <li>{props.description1}</li>
                                        <li>{props.description2}</li>
                                        <li>{props.description3}</li>
                                    </ul>
                                  </Subtitle>
                                  <BtnWrap>
                                     {props.showButton ? 
                                     <Button
                                       to="home"  
                                       primary={primary ? 1 : 0}
                                       smooth={true}
                                       duration={500}
                                       spy={true}
                                       exact="true"
                                       offset={-80}
                                       dark={dark ? 1 : 0}
                                       dark2={dark2 ? 1: 0}
                                       >
                                            {props.buttonLabel}
                                        </Button> : 
                                        <ButtonLink
                                            to={props.path}  
                                        >
                                            {props.buttonLabel}
                                        </ButtonLink>
                                                                               
                                        }
                                  </BtnWrap> 
                              </TextWrapper>
                            </Column1>
                            <Column2>
                                <ImgWrap
                                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                    style={{ transform: prop.xys.interpolate(trans) }}
                                >
                                   <Img src={props.img} alt={props.alt} />
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Info
