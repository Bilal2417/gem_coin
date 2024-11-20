import { Container , Typography , Box, Grid, Button , ImageList , ImageListItem} from "@mui/material";
import footerImg from "../../images/image-3.png"
import { Input } from "@mui/material";
import facebook from "../../images/facebook.png"
import discord from "../../images/discord.png"
import plane from "../../images/plane.png"
import tiktok from "../../images/tiktok.png"
import youTube from "../../images/youTube.png"
import twitter from "../../images/twitter.png"
import "./footer.css"

export default function Footer () {



    return <>
    <Box sx={{
        backgroundImage :  `url(${footerImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
backgroundColor : "#000",
padding : "50px 0",
'@media(max-width : 500px)':{
  padding : "0 0 30px",

}
    }}>

    <Container >
    <Box>
                            <Typography  variant="h2"  sx={{ fontSize : "4.2em", fontFamily : "Metal Mania", color : "white",
                                '@media(max-width:1120px )' : {
                                    lineHeight: "52px",},
                                 '@media(max-width:850px )' : {
                                 fontSize : "3.2em",
                                 },
                                 '@media(max-width:720px )' : {
                                   fontSize : "2.6em",
                                 },
                                      '@media(max-width:500px )' : {
                                      lineHeight : "36px",
                                      },
                                  }}>
Don't miss out, Stay updated
                            </Typography>
                        </Box>

                        </Container>

<Container  sx={{padding:"50px 0" , 
    '@media(min-width : 1200px)':{
        maxWidth : "700px"
    }
}}>

<Grid container spacing={2} justifyContent="center">
<Grid item xs={12}>

                        <Grid container spacing={2} sx={{
                            color : "#fff",
                            backgroundColor : "rgba(255, 255, 255, 0.2)",
                                    padding : "0px 5px 0px 40px",
                                    borderRadius : "32px",
                                    margin : "auto",
                                    width : "80%",
                                    '@media (max-width : 500px )':{
                                      padding: "0px 5px 0px 15px",
                                      width: "90%"
                                    }
                                }}>
<Grid item xs={8} sx={{padding : "6px 0"}}>

                                <Input sx={{width : "100%", color : "#fff"
                                }}  type="email" placeholder="Email"/>                                
</Grid>
<Grid item xs={4} sx={{paddingTop : "0px !important" , paddingBottom : "0px !important"}}>

                                <Button sx={{color : "#fff",
                                                          width : "100%",
                                                          borderRadius : "28px",
                                                          backgroundImage : "linear-gradient( #80D4FF , #034161)",
                                                          fontFamily : "Inter",
                                                          height : "100%",
                                                          fontSize : "1em"   ,
                                                          "@media(max-width:750px)":{
                                                              fontSize : "0.8em"   ,
                                                          },                             
                                                          "@media(max-width:500px)":{
                                                              fontSize : "0.6em"   ,
                                                          },                             
                                }}>subscribe</Button>
</Grid>
                                
                                </Grid>
                                </Grid>

                                <Grid item xs={12} marginTop="50px">


                                    <Grid container spacing={2} justifyContent="center">

      <Grid item sx={{"@media ( max-width : 400px )":{
        paddingLeft : "5px !important"
      }}}>
        <Box className="footer-logo-block" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', display : "flex",alignItems : "center", justifyContent : "center" , borderRadius : "12px",
         }}>
         <img src={twitter}></img>
        </Box>
      </Grid>
      <Grid item sx={{"@media ( max-width : 400px )":{
        paddingLeft : "5px !important"
      }}}>
        <Box className="footer-logo-block" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', display : "flex",alignItems : "center", justifyContent : "center" , borderRadius : "12px", }}>
         <img src={facebook}></img>
        </Box>
      </Grid>
      <Grid item sx={{"@media ( max-width : 400px )":{
        paddingLeft : "5px !important"
      }}}>
        <Box className="footer-logo-block" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)',  display : "flex",alignItems : "center", justifyContent : "center" , borderRadius : "12px",}}>
          
         <img src={plane}></img>
        </Box>
      </Grid>
      <Grid item sx={{"@media ( max-width : 400px )":{
        paddingLeft : "5px !important"
      }}}>
        <Box className="footer-logo-block" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)',  display : "flex",alignItems : "center", justifyContent : "center" , borderRadius : "12px", }}>
          
         <img src={youTube}></img>
        </Box>
      </Grid>
      <Grid item sx={{"@media ( max-width : 400px )":{
        paddingLeft : "5px !important"
      }}}>
        <Box className="footer-logo-block" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)',  display : "flex",alignItems : "center", justifyContent : "center" , borderRadius : "12px" ,}}>
          
         <img src={tiktok}></img>
        </Box>
      </Grid>
      <Grid item sx={{"@media ( max-width : 400px )":{
        paddingLeft : "5px !important"
      }}}>
        <Box className="footer-logo-block" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', display : "flex",alignItems : "center", justifyContent : "center" , borderRadius : "12px" ,}}>
          
         <img src={discord}></img>
        </Box>
      </Grid>
    </Grid>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography sx={{color : "#fff" , fontSize : "1em",
                                      '@media (max-width : 450px )':{
                                        fontSize : "0.8em"
                                      },
                                      '@media (max-width : 350px )':{
                                        fontSize : "0.7em"
                                      },
                                    }} variant="body1">© 2024. All rights reserved by GAME GEM COIN</Typography>
                                </Grid>

                                    </Grid>
                                </Container>

                                     </Box>
    </>
}