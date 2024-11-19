import "./tokenomics.css"
import { Box , Container, Grid ,Grid2, Typography } from "@mui/material"
import chartUpperImg from "../../images/tokenImg.png"
import tokenImg from "../../images/usingPadMain.png"

export default function Tokenomics () {
    return <>
    <Box className="token-block">

                            <Box className="section-head">
                        <Box className="section-lft-line"></Box>
                        <Box className="secondary-heading-block">
                            <Typography className="heading-grd" variant="h2">
                                tokenomics
                            </Typography>
                        </Box>
                        <Box className="section-rgt-line"></Box>
                    </Box>

                    <Container 
                           disableGutters
                           sx={{
                               maxWidth: '1500px !important',
                               margin: '0 auto',
                               padding: '0 16px',
                           }}className="token-content">
                        <Grid2 justifyContent={"center"} className="token-area">

<Grid justifyContent={"center"} className="tokenChartBlock">
    <Box className="tokenChart">
    <img src={chartUpperImg} />
    </Box>
</Grid>
<Box className="tokenImgBlock">
    <img src={tokenImg}/>
</Box>
                        </Grid2>
                    </Container>
    </Box>
    </>
}