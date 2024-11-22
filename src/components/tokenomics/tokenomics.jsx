import "./tokenomics.css"
import { Box , Container, Grid ,Grid2, Typography } from "@mui/material"
import tknchart from "../../images/tknImg.png"
import tokenImg from "../../images/usingPadMain.png"

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
                            

<Grid item xs={12} md={6} sx={{ justifyContent : "center" , position : "relative", zIndex : "1", position : "relative",
            //    "&:before":{
            //                            content: '""',  
            //                            backgroundImage : `url(${tknchart})`,
            //        backgroundSize : "contain",
            //        backgroundRepeat : "no-repeat",
            //        width: "80%",
            //        height: "80%",
            //        position : "absolute",
            //        left : "15%"
            //    },
}} className="tokenChartBlock">

    <img src={tknchart}/>
</Grid>
<Grid item xs={12} md={6} className="tokenImgBlock">
    <img src={tokenImg}/>
</Grid>
                        </Grid>
        </Container>
    </Box>
    </>
}