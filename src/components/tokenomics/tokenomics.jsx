import "./tokenomics.css"
import { Box , Container, Typography } from "@mui/material"
import chartUpperImg from "../../images/tokenImg.png"
import tokenImg from "../../images/usingPadMain.png"

export default function Tokenomics () {
    return <>
    <Box className="token-block">

                            <Box className="section-head">
                        <Box className="section-lft-line"></Box>
                        <Box className="section-heading">
                            <Typography className="heading-grd" variant="h2">
                                tokenomics
                            </Typography>
                        </Box>
                        <Box className="section-rgt-line"></Box>
                    </Box>

                    <Container className="token-content">
                        <Box className="token-area">

<Box className="tokenChartBlock">
    <Box className="tokenChart">
    <img src={chartUpperImg} />
    </Box>
</Box>
<Box className="tokenImgBlock">
    <img src={tokenImg}/>
</Box>
                        </Box>
                    </Container>
    </Box>
    </>
}