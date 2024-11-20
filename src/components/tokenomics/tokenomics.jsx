import "./tokenomics.css"
import { Box , Container, Grid ,Grid2, Typography } from "@mui/material"
import chartUpperImg from "../../images/tokenImg.png"
import tokenImg from "../../images/usingPadMain.png"

export default function Tokenomics () {
    return <>
    <Box component="section" className="token-block">
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

                        <Grid container spacing={2} justifyContent={"center"}>

<Grid item xs={12} md={6} sx={{display : "flex" , justifyContent : "center"}} className="tokenChartBlock">
    <Box sx={{
        width : "400px",
        height : "400px",
        '@media (max-width : 1050px )':{
            width : "300px" ,
            height : "300px"
        },
        '@media (max-width : 900px )':{
            width : "200px" ,
            height : "200px"
        },
    }} className="tokenChart">
    <img src={chartUpperImg} />
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