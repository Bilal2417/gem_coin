import "./tokenomics.css"
import { Box , Container, Grid ,Grid2, Typography } from "@mui/material"
import tknchart from "../../images/tknImg.png"
import tokenImg from "../../images/usingPadMain.png"
import bLimit from "../../images/bLimit.png"
import pShare from "../../images/pShare.png"
import rShare from "../../images/rShare.png"
import oPublic from "../../images/tknComp.png"

export default function Tokenomics () {
    return <>
    <Box component="section" className="token-block" sx={{
           position : "relative",
           "&:after":{
                                   content: '""',  
                                   backgroundImage : `url(${tokenImg})`,
               backgroundSize : "cover",
               backgroundRepeat : "no-repeat",
               position : "absolute",
               left : "0",
               height : "100%",
               width: "400px",
               opacity : "0.2",
               transform : "rotateY(180deg)",
               bottom : "0"
           },
           "@media (max-width : 500px )":{
            "&:after":{
                width : "300px",
                height : "80%"
            }
           },
           "@media (max-width : 350px )":{
            "&:after":{
                width : "250px"
            }
           },
    }}>
<Container       sx={{
        paddingLeft: "0",   
        paddingRight: "0",  
      }}>

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
                                tokenomics
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

                        <Grid container spacing={2} justifyContent={"center"} sx={{
                            '@media ( max-width : 900px )' : {
                                gap : "50px"}}}>
                            

<Grid item xs={12} md={6} sx={{ justifyContent : "center" , position : "relative", zIndex : "1",
               "&:before":{
                                       content: '""',  
                                       backgroundImage : `url(${tknchart})`,
                   backgroundSize : "contain",
                   backgroundRepeat : "no-repeat",
                   width: "80%",
                   height: "80%",
                   position : "absolute",
                   left : "15%"
               },
}} className="tokenChartBlock">

    <Box sx={{display : "flex", flexDirection : "column" ,gap : "35px", width : "115%" , margin : "50px 0"}}>

    <Box sx={{display : "flex" , alignItems : "center" , marginLeft : "-20px"}}>
        <Box>
        <Typography variant="body1" sx={{
            textTransform : "uppercase",
            fontFamily : "Metal Mania",
            color : "#7DCCF4",
            fontSize : "24px"            ,
            "@media (max-width : 1000px )":{
                fontSize : "18px"            ,
            }
        }}>Open public sale</Typography>
        <Typography variant="body1" sx={{
                        textTransform : "uppercase",
                        fontFamily : "Montserrat",
                        color : "#fff",
                        fontSize : "18px",
                        "@media (max-width : 1000px )":{
                            fontSize : "14px"            ,
                        }
        }}>25.80%</Typography>
        </Box> 
                        <Box sx={{width : "100px"}}>
                        <img src={oPublic}/>
                        </Box>
    </Box>

<Box sx={{alignSelf : "flex-end"}}>

    <Box sx={{display : "flex" , alignItems : "center"}}>
        <Box sx={{width : "100px"}}>
        <img src={bLimit}/>
        </Box>
        <Box>
        <Typography variant="body1" sx={{
            textTransform : "uppercase",
            fontFamily : "Metal Mania",
            color : "#7DCCF4",
            fontSize : "24px"       ,
            "@media (max-width : 1000px )":{
                fontSize : "18px"            ,
            }     
        }}>burning limit</Typography>
        <Typography variant="body1" sx={{
                        textTransform : "uppercase",
                        fontFamily : "Montserrat",
                        color : "#fff",
                        fontSize : "18px",
                        "@media (max-width : 1000px )":{
                            fontSize : "14px"            ,
                        }
                    }}>50%</Typography>
        </Box> 
    </Box>
                    </Box>

                    <Box sx={{display : "flex" , alignItems : "center" }}>
        <Box sx={{marginLeft : "-85px" ,
                      "@media (max-width : 1000px )":{
                        marginLeft : "-15px"           ,
                    }
        }}>
        <Typography variant="body1" sx={{
            textTransform : "uppercase",
            fontFamily : "Metal Mania",
            color : "#7DCCF4",
            fontSize : "24px"      ,
            "@media (max-width : 1000px )":{
                fontSize : "18px"            ,
            }      
        }}>Presale Launch</Typography>
        <Typography variant="body1" sx={{
                        textTransform : "uppercase",
                        fontFamily : "Montserrat",
                        color : "#fff",
                        fontSize : "18px",
                        "@media (max-width : 1000px )":{
                            fontSize : "14px"            ,
                        }
        }}>11.3%</Typography>
        </Box> 
                        <Box sx={{width : "100px"}}>
                        <img src={oPublic}/>
                        </Box>
    </Box>

    </Box>

<Box sx={{display : "flex" , alignItems : "center" , width : "70%" , margin : "120px 0 0 100px"}}>
<Box sx={{display : "flex" , alignItems : "center"}}>
        <Box>
        <Typography variant="body1" sx={{
            textTransform : "uppercase",
            fontFamily : "Metal Mania",
            color : "#7DCCF4",
            fontSize : "18px"        ,
            "@media (max-width : 1000px )":{
                fontSize : "14px"            ,
            }    
        }}>company share</Typography>
        <Typography variant="body1" sx={{
                        textTransform : "uppercase",
                        fontFamily : "Montserrat",
                        color : "#fff",
                        fontSize : "18px",
                        "@media (max-width : 1000px )":{
                            fontSize : "12px"            ,
                        }
        }}>6.5%</Typography>
        </Box> 
    </Box>

    <Box sx={{display : "flex" , alignItems : "center"}}>
        <Box>
            <Box sx={{width : "80px" , marginLeft : "35px" , marginTop :  "-10px"}}>
            <img src={rShare}/>
            </Box>
        <Typography variant="body1" sx={{
            textTransform : "uppercase",
            fontFamily : "Metal Mania",
            color : "#7DCCF4",
            fontSize : "18px"       ,
            "@media (max-width : 1000px )":{
                fontSize : "14px"            ,
            }     
        }}>reward share</Typography>
        <Typography variant="body1" sx={{
                        textTransform : "uppercase",
                        fontFamily : "Montserrat",
                        color : "#fff",
                        fontSize : "18px",
                        "@media (max-width : 1000px )":{
                            fontSize : "12px"            ,
                        }
        }}>11.3%</Typography>
        </Box> 
    </Box>
</Box>

</Grid>
<Grid item xs={12} md={6} className="tokenImgBlock">
    <img src={tokenImg}/>
</Grid>
                        </Grid>
        </Container>
    </Box>
    </>
}