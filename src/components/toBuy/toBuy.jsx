import { Box , Container, Typography , Grid} from "@mui/material"
import buyImg from "../../images/buy1stImg.png"
import buy3Img from "../../images/buy3rdImg.png"
import "./toBuy.css"
export default function HowToBuy () {
    return <>
    <Box component="section" className="buy-section">
        <Container
             disableGutters
             sx={{
                 maxWidth: '1500px !important',
                 margin: '0 auto',
                 padding: '0 16px',
             }}>


    <Box sx={{    padding: "50px 0 100px",}} className="buy-block">

                        <Box className="section-head">
                        <Box className="section-lft-line"></Box>
                        <Box className="secondary-heading-block">
                            <Typography className="heading-grd" variant="h2" sx={{'@media(max-width:1120px )' : {    lineHeight: "52px",}}}>
                                how to buy
                            </Typography>
                            <Typography sx={{    fontFamily: "Montserrat",
                                                                   fontSize : "1.2em",
                                                                   wordSpacing : "2px"
                                                                }} className="section-mini-heading" variant="body1">
                                Buy in 3 steps
                            </Typography>
                        </Box>
                        <Box className="section-rgt-line"></Box>
                    </Box>

<Container
                        disableGutters
                        sx={{
                            margin: '0 auto',
                            marginTop : "100px",
                            padding: '0 16px',
                        }}>


<Grid container spacing={2} sx={{"@media(max-width:590px)":{justifyContent: "center" , gap : "50px"}}}>

                    <Grid item xs={12} sm={6} md={4} lg={4} className="buy-content-block" sx={{display : "flex" , flexDirection : "column" , maxWidth : "360px"}}>
                        <Box className="buy-img-block">
                            <img src={buyImg}/>
                        </Box>
                        
                        <Box className="buy-text-block">
                            <Box className="quaternary-head-block">
                                <Typography  sx={{    fontSize: "2.2rem",
                                                                      fontFamily: "Metal Mania"}}  variant="h3" className="quaternary-heading heading-grd">connect your wallet</Typography>
                            </Box>
                            <Box className="text-block">
                                <Typography variant="body1" className="buy-text" sx={{ fontSize: "0.8em", lineHeight: "18px"}}>
                                Click on „Connect Wallet“ and open your decentralized wallet to verify! Make sure you are on the Ethereum Network and have some ETH for fees ready.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4} className="buy-content-block" sx={{display : "flex" , flexDirection : "column", maxWidth : "360px"}}>
                        <Box className="buy-img-block">
                            <img src={buyImg}/>
                        </Box>
                        
                        <Box className="buy-text-block">
                            <Box className="buy-text-head">
                                <Typography  sx={{    fontSize: "2.2rem",
                                                                      fontFamily: "Metal Mania"}}  variant="h3" className="buy-text-heading heading-grd">Enter the amount</Typography>
                            </Box>
                            <Box className="text-block">
                                <Typography variant="body1" className="buy-text" sx={{ fontSize: "0.8em", lineHeight: "18px"}}>
                                Either enter the amount of you wish to receive or the amount of USDT or ETH you want to spend.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4} className="buy-content-block" sx={{display : "flex" , flexDirection : "column", maxWidth : "360px"}}>
                        <Box className="buy-img-block">
                            <img src={buy3Img}/>
                        </Box>
                        
                        <Box className="buy-text-block">
                            <Box className="buy-text-head">
                                <Typography sx={{    fontSize: "2.2rem",
                                                                      fontFamily: "Metal Mania"}} variant="h3" className="buy-text-heading heading-grd">Confirm and Go</Typography>
                            </Box>
                            <Box className="text-block">
                                <Typography variant="body1" className="buy-text"  sx={{ fontSize: "0.8em", lineHeight: "18px"}}>
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