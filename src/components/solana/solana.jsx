import { Container , Box , Button, Typography , Grid, Input } from "@mui/material"
import barImg from "../../images/game-gem-coin-img.png"
import solanaLogo from "../../images/solanaLogo.png"
import bckTree from "../../images/heroTree.png"
import "./solana.css"

export default function SolanaDay () {
    return <>
    <Container>
        <Box sx={{display : "flex" , justifyContent : "center"}}>
            <Box sx={{
                width : "80%",
                backgroundImage : "linear-gradient(#80D4FF, rgba(3, 65, 97, 0.6))" ,
                    padding :"50px",
                        display : "flex",
                        flexDirection : "column" ,
                        gap : "25px",
                        position : "relative",
                        '&:before': {
                            content: '""',  
                            backgroundImage : `url(${bckTree})`,
                            backgroundSize : "cover",
                            position : "absolute",
                            backgroundPosition : "center",
                            backgroundRepeat : "no-repeat",
                            height : "90%",
                            width : "400px",
                            left : "30%",
                            bottom : "0",
                            zIndex : "1",              
                            opacity: "0.4"
                        }
                }}>

                <Box sx={{zIndex : "1"}}>
                    <Typography sx={{
                        color : "#fff",
                        fontFamily : "Metal Mania",
                        lineHeight : "32px"
                    }} variant="h4">
                    GAME GEM COIN launches on Solana day! 
                    </Typography>
                    <Typography sx={{
                        color : "#fff",
                        opacity : "0.9",
                        fontFamily : "Metal Mania",
                        lineHeight : "32px"
                    }} variant="h4">                     
                    Last chance to buy!
                    </Typography>
                </Box>

                <Box sx={{
                    display : "flex",
                    flexDirection : "column" ,
                    gap : "25px",
                    zIndex : "1"
                }}>
<Grid container spacing={2}>

<Grid item xs={12} sm={6} md={3} lg={3} xl={3} elevation={3}>

                    <Button sx={{
                        color : "#000",
                        fontSize : "14px",
                        backgroundColor : "#E5E5E5",
                        width : '180px',
                        fontFamily : "Montserrat",
                        borderRadius : "8px",
                        padding : "8px 0"
                    }}>Stage 1/5</Button>
                    </Grid>

                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} elevation={3}>
                    <Button sx={{
                        color : "#fff",
                        fontSize : "14px",
                        backgroundColor : "#000",
                        width : '180px',
                        fontFamily : "Montserrat",
                        borderRadius : "8px",
                        padding : "8px 0"
                    }}>GGC = $ 0.0060</Button>
</Grid>

                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} elevation={3}>
                    <Button sx={{
                        color : "#fff",
                        fontSize : "14px",
                        backgroundImage : "linear-gradient( #80D4FF , #034161 )" ,
                        width : '180px',
                        fontFamily : "Poppins",
                        borderRadius : "8px",
                        padding : "8px 0"
                    }}>Listing Price  $0.03</Button>
</Grid>

                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} elevation={3}>
                    <Button sx={{
                        color : "#fff",
                        fontSize : "14px",
                        backgroundColor : "#0F92C6",
                        width : '180px',
                        fontFamily : "Poppins",
                         borderRadius : "8px",
                        padding : "8px 0"
                    }}>Next Price  $0.0120</Button>
</Grid>
                        </Grid>

                        <Box>
                            <Box sx={{width : "90%" , backgroundColor : "#D9D9D9" , height : "30px" , margin : "auto" , borderRadius : "14px"}}>
                                <Box sx={{width : "20%" , backgroundColor : "#0F92C6" , height : "30px" , borderRadius : "14px", position : "relative" ,
                                         '&:after': {
                                            content: '""',  
                                            position: 'absolute',
                                            bottom: '-50%',
                                            left: '80%',
                                            width: '50px',
                                            height: '50px',
                                            backgroundImage : `url(${barImg})`,
                                            backgroundSize : "contain", 
                                            backgroundRepeat : "no-repeat",
                                            backgroundPosition : "center"
                                          }
                                }}></Box>
                            </Box>
                        </Box>

<Grid container sx={{width : "80%" , margin : "auto"}}>

<Grid item xs={12}  sm={6} >
    <Box sx={{display : "flex" , flexDirection : "column" , alignItems : "flex-start"
        ,'@media (max-width : 600px )':{
            alignItems : "center"
        }
    }}>

    <Typography sx={{
        color : "#6AD4FD",
        fontSize : "28px",
        fontFamily : "Metal Mania",
        width : "fit-content"
    }} variant="body1">tokens sold</Typography>
    <Typography sx={{
        color : "#fff",
        fontSize : "14px",
        fontFamily : "Poppins",
        width : "fit-content"
        
    }} variant="body1">1,977,332 / 200,000,000</Typography>
    </Box>
</Grid>

<Grid item xs={12}  sm={6}>
    <Box  sx={{display : "flex" , flexDirection : "column" , alignItems : "flex-end"
                ,'@media (max-width : 600px )':{
                    alignItems : "center"
                }
    }}>

<Typography sx={{
    color : "#6AD4FD",
    fontSize : "28px",
        fontFamily : "Metal Mania",
        width : "fit-content"
    }} variant="body1">tokens sold</Typography>
    <Typography sx={{
        color : "#fff",
        fontSize : "14px",
        fontFamily : "Poppins",
        width : "fit-content"
        
    }} variant="body1">1,977,332 / 200,000,000</Typography>
    </Box>
</Grid>

</Grid>


<Grid container sx={{width : "80%" , margin : 'auto' , justifyContent : "space-between"}}>
    <Grid item xs={12} sm={12} md={6}>
        <Box sx={{display : "flex" , alignItems : "center",
                            backgroundColor : "#fff",
                            padding : "8px",
                            borderRadius : "10px",
                            gap : "20px",
                            width : "250px"
                        }}>
            <img style={{ width : "30px", height : "30px"}} src={solanaLogo} alt="solana logo"/>
            <Input type="number"/>
        </Box>
    </Grid>
    <Grid item xs={12} sm={12} md={6} sx={{justifyItems : "flex-end"}}>
        <Box sx={{display : "flex" , alignItems : "center",
                            backgroundColor : "#fff",
                            padding : "8px",
                            borderRadius : "10px",
                            gap : "20px",
                            width : "250px"
                        }}>
            <img style={{ width : "30px", height : "30px"}} src={barImg} alt="solana logo"/>
            <Input type="number"/>
        </Box>
    </Grid>
                            </Grid>

<Box sx={{width : "90%" , margin : "auto"}}>
    <Button sx={{
        color : '#fff',
        backgroundColor : "#0F92C6",
        fontFamily : "Metal Mania",
        textAlign : 'center',
        width : "100%",
        borderRadius : "10px"
    }}>connect wallet</Button>
</Box>
                </Box>
            </Box>
        </Box>
    </Container>
    </>
}