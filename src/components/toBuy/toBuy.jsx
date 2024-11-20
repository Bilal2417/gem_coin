import { Box , Container, Typography , Grid} from "@mui/material"
import buyImg from "../../images/buy1stImg.png"
import buy3Img from "../../images/buy3rdImg.png"
import "./toBuy.css"
export default function HowToBuy () {
    return <>
    <Box component="section" className="buy-section" sx={{padding : "100px 0 0" ,
        '@media ( min-width : 760px )':{
            padding : "200px 0 0"
        }
    }}>
        <Container>


    <Box sx={{    padding: "50px 0 100px",}} className="buy-block">

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
                            <Typography className="heading-grd" variant="h2" sx={{ fontSize : "4.2em", fontFamily : "Metal Mania",
                                '@media(max-width:1120px )' : {
                                 lineHeight: "52px",},
                                 '@media(max-width:850px )' : {
                                 fontSize : "3.2em",
                                 },
                                 '@media(max-width:720px )' : {
                                 fontSize : "2.6em",
                                 lineHeight : "38px",
                                 }}}>
                                how to buy
                            </Typography>
                            <Typography sx={{    fontFamily: "Montserrat",
                                                                   fontSize : "1.2em",
                                                                   wordSpacing : "2px",
                                                                    '@media(max-width:850px )' : {
                                                                    fontSize : "1em",
                                                                    },
                                                                    '@media(max-width:720px )' : {
                                                                    fontSize : "0.8em",
                                                                    marginTop : "10px"
                                                                    }
                                                                }} className="section-mini-heading" variant="body1">
                                Buy in 3 steps
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

<Container
                        sx={{
                            margin: '0 auto',
                            marginTop : "100px",
                            padding: '0 16px',
                        }}>


<Grid container spacing={2} sx={{ gap : "50px" ,
        display: 'grid',
        // gridTemplateColumns: '1fr', 
        '@media (min-width: 900px)': {
          gridTemplateColumns: 'repeat(3 ,1fr)',
        },
    "@media(max-width:1100px)":{
        justifyContent: "space-around" 
        },
        }}>

                    <Grid item xs={8} sm={6} md={12} className="buy-content-block" sx={{ display : "flex" , flexDirection : "column" , 
                           '@media (max-width: 900px)': {
                            gridColumn: 'span 1', 
                        },
                        '@media (min-width : 900px )':{
                            flexBasis: 'calc(33.33% - 50px) !important' ,
                                                }
                    }}>
                        <Box className="buy-img-block">
                            <img src={buyImg}/>
                        </Box>
                        
                        <Box className="buy-text-block">
                            <Box className="quaternary-head-block">
                                <Typography  sx={{    fontSize: "2.2rem",
                                                                      fontFamily: "Metal Mania",
                                                                      "@media(max-width: 900px ) and (min-width : 700px)":{
                                                                        fontSize : "2.6rem" 
                                                                      },
                                                                      "@media(max-width: 700px )":{
                                                                        fontSize : "2rem"      
                                                                      },
                                                                      "@media(max-width: 450px )":{
                                                                        fontSize : "1.6em"      
                                                                                                                                 
                                }}}  variant="h3" className="quaternary-heading heading-grd">connect your wallet</Typography>
                            </Box>
                            <Box className="text-block">
                                <Typography variant="body1" className="buy-text" sx={{ fontSize: "0.8em", lineHeight: "18px",
                                    "@media(max-width: 900px ) and (min-width : 600px)":{
                                        fontSize : "1em" , lineHeight : "22px"
                                    },
                                    "@media(max-width: 700px ) ":{
                                        fontSize : "0.8em" , lineHeight : "18px"
                                    },                                    
                                    "@media(max-width: 450px ) ":{
                                        fontSize : "0.7em" , lineHeight : "14px"
                                    }
                                }}>
                                Click on „Connect Wallet“ and open your decentralized wallet to verify! Make sure you are on the Ethereum Network and have some ETH for fees ready.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={8} sm={6} md={12}  className="buy-content-block" sx={{ display : "flex" , flexDirection : "column",
                                               '@media (max-width: 900px)': {
                                                gridColumn: 'span 1', 
                                                justifySelf : "flex-end"
                                              },
                        '@media (min-width : 900px )':{
                            flexBasis: 'calc(33.33% - 50px) !important' ,
                        }
                    }}>
                        <Box className="buy-img-block">
                            <img src={buyImg}/>
                        </Box>
                        
                        <Box className="buy-text-block">
                            <Box className="buy-text-head">
                                <Typography  sx={{    fontSize: "2.2rem",
                                                                      fontFamily: "Metal Mania",
                                                                      "@media(max-width: 900px ) and (min-width : 700px)":{
                                                                        fontSize : "2.6rem" 
                                                                      },
                                                                      "@media(max-width: 700px )":{
                                                                        fontSize : "2rem"      
                                                                    },
                                                                    "@media(max-width: 450px )":{
                                                                      fontSize : "1.6em"                                                             
                                }}}  variant="h3" className="buy-text-heading heading-grd">Enter the amount</Typography>
                            </Box>
                            <Box className="text-block">
                                <Typography variant="body1" className="buy-text" sx={{ fontSize: "0.8em", lineHeight: "18px",
                                                                        "@media(max-width: 900px ) and (min-width : 600px)":{
                                                                            fontSize : "1em" , lineHeight : "22px"
                                                                        },
                                                                        "@media(max-width: 700px ) ":{
                                                                            fontSize : "0.8em" , lineHeight : "18px"
                                                                        },                                                                    
                                                                        "@media(max-width: 450px ) ":{
                                                                            fontSize : "0.7em" , lineHeight : "14px"
                                                                        }
                                }}>
                                Either enter the amount of you wish to receive or the amount of USDT or ETH you want to spend.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={8} sm={6} md={12} className="buy-content-block" sx={{ display : "flex" , flexDirection : "column", 
                                               '@media (max-width: 900px)': {
                                                gridColumn: 'span 1', 
                                              },
                                                '@media (min-width : 900px )':{
                                                    flexBasis: 'calc(33.33% - 50px) !important' ,
                                                }
                    }}>
                        <Box className="buy-img-block">
                            <img src={buy3Img}/>
                        </Box>
                        
                        <Box className="buy-text-block">
                            <Box className="buy-text-head">
                                <Typography sx={{    fontSize: "2.2rem",
                                                                      fontFamily: "Metal Mania",
                                                                      "@media(max-width: 900px ) and (min-width : 700px)":{
                                                                        fontSize : "2.6rem" 
                                                                      },
                                                                      "@media(max-width: 700px )":{
                                                                        fontSize : "2rem"      
                                                                    },
                                                                    "@media(max-width: 450px )":{
                                                                      fontSize : "1.6em"                                                             
                                }}} variant="h3" className="buy-text-heading heading-grd">Confirm and Go</Typography>
                            </Box>
                            <Box className="text-block">
                                <Typography variant="body1" className="buy-text"  sx={{ fontSize: "0.8em", lineHeight: "18px",
                                                                        "@media(max-width: 900px ) and (min-width :700px)":{
                                                                            fontSize : "1em" , lineHeight : "22px"
                                                                        },
                                                                        "@media(max-width: 700px ) ":{
                                                                            fontSize : "0.8em" , lineHeight : "18px"
                                                                        },
                                                                        "@media(max-width: 450px ) ":{
                                                                            fontSize : "0.7em" , lineHeight : "14px"
                                                                        }
                                }}>
                                Now click on „Confirm“ and verify the transaction inside your wallet! Now wait for the presale to finish and come again to claim your account.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                                                                      </Grid>
</Container>
                                </Box>
                                                                      </Container>
                                                                      </Box>
    </>
}