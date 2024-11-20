import { Container, Box, Typography , Grid } from "@mui/material";
import cTele from "../../images/coinImg.png";
import beIn from "../../images/beInImg.png";
import cDesk from "../../images/coinDeskImg.png";
import crypto from "../../images/cryptoImg.png";
import newsBtc from "../../images/btcImg.png";
import aboutImg from "../../images/usingPad.png";
import "./aboutUs.css";
import Marquee from "react-fast-marquee";
import { Image } from "@mui/icons-material";

export default function AboutUs() {
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
                                <Box component="li" sx={{marginRight : "40px", "@media (max-width :760px)":{marginRight : "0"}}} className="featured-logo-list-item mrg-rgt">
                                    <img src={newsBtc} alt="newsBtc" />
                                </Box>
                            </Box>
                            </Marquee>
                        </Box>
                </Box>

                    </Container>


                <Box className="about-area" sx={{padding:"40px 0" , position : "relative" , marginTop :"200px"
                    ,
                    '@media(max-width : 600px )' :{
                        marginTop :"100px",
                        padding : '0'
                    },
                }}>
                    <Container>

                        <Grid container spacing={2} alignItems="center">
                            <Grid  item xs={12} sm={6}
                                className="about-img-block"
                                sx={{ display: 'flex', justifyContent: 'flex-start', width: '45%' }}
                                >
                                <img src={aboutImg} alt="about us" sx={{ width: '75%', transform: 'scale(1.5)' ,
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
                                        padding: "10px 20px",
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
                                            lineHeight : "18px"
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
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        Lorem Ipsum is simply dummy text.
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
