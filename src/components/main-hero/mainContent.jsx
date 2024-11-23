import { Container, Box, Button, Typography, Grid } from "@mui/material";
import gemOnPad from "../../images/container-main-image.png";
import heroBtn from "../../images/hero-btn.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./main.css";

export default function MainContent() {
  const imgAni = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgAni.current,
      {
        opacity: 0,
        // scale : 0.5,
        delay: 2,
        y: -100,
      },
      {
        opacity: 1,
        // scale : 2,
        y: 0,
        duration: 3,
        ease: "power2.out",
      },
    );
  }, []);

  return (
    <Container
      disableGutters
      sx={{
        margin: "0 auto",
        padding: "0 16px",
      }}
    >
      <Grid
        container
        sx={{
          "@media(max-width:1200px)": {
            alignItems: "center",
          },
          "@media (max-width : 900px)": {
            justifyContent: "center",
          },
          "@media (max-width : 700px) and (min-width : 500px )": {
            gap: "100px",
          },
        }}
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          className="hero-block"
          sx={{
            width: "50%",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Metal Mania",
              fontSize: "6.4em",
              lineHeight: "84px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              "@media ( max-width : 1200px ) and (min-width : 1000px)": {
                fontSize: "5.4em",
                lineHeight: "62px",
              },
              "@media ( max-width : 1000px ) and (min-width : 900px)": {
                fontSize: "4.4em",
                lineHeight: "52px",
              },
              "@media (max-width : 900px)": {
                fontSize: "5.4em",
                lineHeight: "62px",
                alignItems: "center",
              },
              "@media (max-width : 550px)": {
                fontSize: "4.4em",
                lineHeight: "52px",
              },
              "@media (max-width : 450px)": {
                fontSize: "3.4em",
                lineHeight: "42px",
              },
              "@media (max-width : 350px)": {
                fontSize: "2.4em",
                lineHeight: "32px",
              },
            }}
          >
            you want <span style={{ color: "#7ADBE5" }}> game gem coin </span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Marcellus SC",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "24px",
              textAlign: "left",
              width: "80%",
              "@media ( max-width : 1200px ) and (min-width : 1000px)": {
                fontSize: "16px",
                lineHeight: "20px",
              },
              "@media ( max-width : 1000px ) and (min-width : 900px)": {
                fontSize: "14px",
                lineHeight: "18px",
              },
              "@media (max-width : 900px)": {
                textAlign: "center",
                margin: "auto",
              },
              "@media (max-width : 550px)": {
                fontSize: "16px",
                lineHeight: "20px",
              },
              "@media (max-width : 450px)": {
                fontSize: "14px",
                lineHeight: "16px",
              },
              "@media (max-width : 350px)": {
                fontSize: "12px",
                lineHeight: "14px",
              },
            }}
          >
            GGC offers a straightforward and innovative way to earn
            cryptocurrency, making it accessible to everyone. By engaging with
            our platform, you can effortlessly tap your way to earning crypto
            and cashing out your rewards. Our comprehensive learning tutorials
            further empower you with the knowledge needed to navigate the crypto
            world confidently. Together, let's build a brighter future with the
            simplicity of earning and learning about cryptocurrency.
          </Typography>

          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "180px",
              height: "80px",
              "@media (max-width : 900px)": {
                margin: "auto",
              },
            }}
          >
            <Box
              sx={{
                width: "180px",
                height: "80px",
                backgroundImage: `url(${heroBtn})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                "@media ( max-width : 350px )": {
                  width: "160px",
                  height: "65px",
                  fontSize: "20px",
                },
              }}
            >
              <Button
                sx={{
                  fontSize: "24px",
                  fontFamily: '"Metal Mania", system-ui',
                  padding: "6px 22px",
                  textTransform: "uppercase",
                  color: "#fff",
                  marginTop: "5px",
                  "@media ( max-width : 350px )": {
                    fontSize: "20px",
                  },
                }}
              >
                whitepaper
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          sx={{ width: "50%", position: "relative" }}
          className="hero-img-block-bck"
        >
          <Box
            ref={imgAni}
            className="hero-img-block"
            sx={{ width: "100%", position: "relative", zIndex: "1" }}
          >
            <img src={gemOnPad} alt="Gem Coin" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
