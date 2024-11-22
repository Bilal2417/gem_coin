import { Container, Box, Typography , Grid } from "@mui/material";
import cTele from "../../images/coinImg.png";
import beIn from "../../images/beInImg.png";
import cDesk from "../../images/coinDeskImg.png";
import crypto from "../../images/cryptoImg.png";
import newsBtc from "../../images/btcImg.png";
import aboutImg from "../../images/usingPad.png";
import Marquee from "react-fast-marquee";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./aboutUs.css";

export default function AboutUs() {

const aboutImgAni = useRef(null)

const startAnimation = () => {


        gsap.fromTo(
            aboutImgAni.current,
        {
            x : -300,
            opacity : 0
        },
        {
            x : 0,
            opacity : 1,
            duration : 1.5,
            ease : "power2.out"
        },
    )
}

    return (
        <>
            <Box component="section" className="aboutUs-section">
<Container>

                <Box className="featured-block">
                    <Box className="section-head">
                        <Box sx={{width:"300px",
                                           '@media (max-width:950px)':{
                                               width : "200px"
                                            },
                                            '@media (max-width:650px)':{
                                                width : "150px"
                                            },
                                        }} className="section-lft-line"></Box>
                        <Box>
                            <Typography className="heading-grd" variant="h2"  sx={{ fontSize : "4.2em", fontFamily : "Metal Mania",
                                '@media(max-width:1120px )' : {
                                 lineHeight: "52px",},
                                 '@media(max-width:850px )' : {
                                 fontSize : "3.2em",
                                 },
                                 '@media(max-width:720px )' : {
                                 fontSize : "2.6em",
                                 lineHeight : "32px"
                                 }}}>
                                featured in
                            </Typography>
                        </Box>
                        <Box sx={{width:"300px",
                                           '@media (max-width:950px)':{
                                               width : "200px"
                                            },
                                            '@media (max-width:650px)':{
                                                width : "150px"
                                            },
                                        }} className="section-rgt-line"></Box>
                    </Box>

                        <Box       sx={{
        width: '100%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
      }}>

                            <Marquee gradient={false} pauseOnHover>
                            <Box component="ul"  className="featured-logo-list">
                                <Box component="li" className="featured-logo-list-item">
                                    <img src={cTele} alt="cTele" />
                                </Box>
                                <Box component="li" className="featured-logo-list-item">
                                    <img src={beIn} alt="beIn" />
                                </Box>
                                <Box component="li" className="featured-logo-list-item">
                                    <img src={cDesk} alt="cDesk" />
                                </Box>
                                <Box component="li" className="featured-logo-list-item">
                                    <img src={crypto} alt="crypto" />
                                </Box>
                                <Box component="li"  className="featured-logo-list-item mrg-rgt">
                                    <img src={newsBtc} alt="newsBtc" />
                                </Box>
                            </Box>
                            </Marquee>
                        </Box>
                </Box>

                    </Container>

                <Box  className="about-area" sx={{padding:"40px 0" , position : "relative" , marginTop :"200px"
                    ,
                    '@media(max-width : 600px )' :{
                        marginTop :"100px",
                        padding : '0'
                    },
                }}
                onMouseEnter={startAnimation}
                onTouchStart={startAnimation}
                >
                    <Container>

                        <Grid  container spacing={2} alignItems="center">
                            <Grid  item xs={12} sm={6}
                                className="about-img-block"
                                sx={{ display: 'flex', justifyContent: 'flex-start', width: '45%' }}
                                >
                                <img ref={aboutImgAni} src={aboutImg} alt="about us" sx={{ width: '75%', transform: 'scale(1.5)' ,
                                                                      }} />
                            </Grid>

                            <Grid  item xs={12} sm={6}
                                className="about-content-block"
                                sx={{
                                    width: '45%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    color: '#fff',
                                    gap: '30px',
                                }}
                                >
                                <Box className="tertiary-head-block" sx={{ backgroundImage: 'linear-gradient(to right, #6bc8f7 , #000000)', opacity: 0.8, textAlign: 'left' }}>
                                    <Typography sx={{
                                        fontFamily: "Metal Mania",
                                        '@media(max-width : 1200px )' :{
                                            fontSize : "3em"
                                        },
                                        '@media(max-width : 800px )' :{
                                            fontSize : "2em"
                                        },
                                        '@media(max-width : 700px )' :{
                                            fontSize : "1.6em"
                                        },
                                        '@media(max-width : 599px )' :{
                                            fontSize : "3em"
                                        },
                                        '@media(max-width : 450px )' :{
                                            fontSize : "2.4em"
                                        },
                                        '@media(max-width : 350px )' :{
                                            fontSize : "2em"
                                        },
                                    }} className="tertiary-heading" variant="h3">
                                        about us
                                    </Typography>
                                </Box>

                                <Box className="tertiary-text-block">
                                    <Typography sx={{
                                        fontFamily: "Montserrat" ,
                                        fontWeight: "400px",
                                        padding: "20px 40px",
                                        '@media(max-width : 1200px )' :{
                                            fontSize : "0.8em",
                                            lineHeight : "18px"
                                        },
                                        '@media(max-width : 800px )' :{
                                            fontSize : "0.7em",
                                            lineHeight : "16px"
                                        },
                                        '@media(max-width : 700px )' :{
                                            fontSize : "0.6em",
                                            lineHeight : "14px"
                                        },
                                        '@media(max-width : 599px )' :{
                                            fontSize : "0.9em",
                                            lineHeight : "18px",
                                            padding: "20px ",
                                        },
                                        '@media(max-width : 450px )' :{
                                            fontSize : "0.7em",
                                            lineHeight : "16px"
                                        },
                                        '@media(max-width : 350px )' :{
                                            fontSize : "0.6em",
                                            lineHeight : "14px"
                                        },
                                    }} className="tertiary-text" variant="body1">
                                        <Box component="span" sx={{marginBottom : "5px" , display : "inline-block"}}>

Welcome to our innovative platform, where earning cryptocurrency is as simple as tapping your phone! We believe in making the digital currency world accessible and enjoyable for everyone. Our unique approach allows users to earn crypto effortlessly by engaging with their devices and later cash out their hard-earned coins.
                                        </Box>

                                        <Box component="span" sx={{marginBottom : "5px" , display : "inline-block"}}>

But we don't stop at just earning—we're dedicated to educating our users too. Our comprehensive crypto learning tutorials empower you with the knowledge needed to thrive in the digital currency space. As you watch, learn, and complete each course, you’ll be rewarded with even more crypto.
</Box>
<Box component="span" sx={{marginBottom : "5px" , display : "inline-block"}}>

With us, you can truly "Learn and Earn with Fun," blending education and financial growth seamlessly in the exciting world of digital currency. Join us on this revolutionary journey and become a part of our growing community today!
</Box>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                                            </Container>
                </Box>
                                        
            </Box>
        </>
    );
}
