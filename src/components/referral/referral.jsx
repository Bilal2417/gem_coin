import { Container , Box , Typography  } from "@mui/material"
import bckImg from "../../images/starsBckImg.png"
import refImg from "../../images/refImg.png"
export default function Referral () {
    return <>
    <Box sx={{
        backgroundColor : "black",
        backgroundImage :  `url(${bckImg})`,
    }} component="section">
        <Container>
        <Box className="section-head">
                        <Box  sx={{width:"300px",
                                           '@media (max-width:950px)':{
                                               width : "200px"
                                            },
                                            '@media (max-width:650px)':{
                                                width : "150px"
                                            },
                                        }}  className="section-lft-line"></Box>
                        <Box>
                            <Typography className="heading-grd" variant="h2"  sx={{ fontSize : "4.2em", fontFamily : "Metal Mania",
                                '@media(max-width:1120px )' : {
                                    lineHeight: "52px",},
                                    '@media(max-width:850px )' : {
                                        fontSize : "3.2em",
                                    },
                                    '@media(max-width:720px )' : {
                                        fontSize : "2.6em",
                                    }}}>
                                referral
                            </Typography>
                        </Box>
                        <Box  sx={{width:"300px",
                                           '@media (max-width:950px)':{
                                               width : "200px"
                                            },
                                            '@media (max-width:650px)':{
                                                width : "150px"
                                            },
                                        }}  className="section-rgt-line"></Box>
                    </Box>
                    
                    <Box sx={{width : "100%"}}>
                        <img style={{width : "100%"}} src={refImg}/>
                    </Box>
        </Container>
    </Box>
    </>
}