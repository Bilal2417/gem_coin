import { Container, Box, Typography } from "@mui/material";
import cTele from "../../images/coinImg.png";
import beIn from "../../images/beInImg.png";
import cDesk from "../../images/coinDeskImg.png";
import crypto from "../../images/cryptoImg.png";
import newsBtc from "../../images/btcImg.png";
import aboutImg from "../../images/usingPad.png";
import "./aboutUs.css";

export default function AboutUs() {
    return (
        <>
            <section className="aboutUs-section">
                <div className="featured-block">
                    <div className="featured-head">
                        <div className="featured-lft-line"></div>
                        <div className="featured-heading">
                            <Typography className="heading-grd" variant="h2">
                                featured in
                            </Typography>
                        </div>
                        <div className="featured-rgt-line"></div>
                    </div>

                    <Container
                        disableGutters
                        sx={{
                            maxWidth: '1400px !important',
                            margin: '0 auto',
                            padding: '0 16px',
                        }}
                    >
                        <div className="featured-logo-block">
                            <ul className="featured-logo-list">
                                <li className="featured-logo-list-item">
                                    <img src={cTele} alt="cTele" />
                                </li>
                                <li className="featured-logo-list-item">
                                    <img src={beIn} alt="beIn" />
                                </li>
                                <li className="featured-logo-list-item">
                                    <img src={cDesk} alt="cDesk" />
                                </li>
                                <li className="featured-logo-list-item">
                                    <img src={crypto} alt="crypto" />
                                </li>
                                <li className="featured-logo-list-item">
                                    <img src={newsBtc} alt="newsBtc" />
                                </li>
                            </ul>
                        </div>
                    </Container>
                </div>

                <div className="about-area">
                    <Container>
                        <div className="about-flex-block">
                            <Box
                                className="about-img-block"
                                sx={{ display: 'flex', justifyContent: 'flex-start', width: '45%' }}
                            >
                                <img src={aboutImg} alt="about us" style={{ width: '75%', transform: 'scale(1.5)' }} />
                            </Box>

                            <Box
                                className="about-content-block"
                                sx={{
                                    width: '45%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    color: '#fff',
                                    gap: '30px',
                                }}
                            >
                                <Box className="about-head" sx={{ backgroundImage: 'linear-gradient(to right, #6bc8f7 , #000000)', opacity: 0.8, textAlign: 'left' }}>
                                    <Typography sx={{
                                            fontFamily: "Metal Mania",
                                            fontSize: "3.8em" ,
                                    }} className="about-heading" variant="h3">
                                        about us
                                    </Typography>
                                </Box>

                                <Box className="about-text-block">
                                    <Typography sx={{
                                            fontFamily: "Montserrat" ,
                                            fontWeight: "400px",
                                    }} className="about-text" variant="body1">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        Lorem Ipsum is simply dummy text.
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
}