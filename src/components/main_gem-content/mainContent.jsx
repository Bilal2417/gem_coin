import { Container, Box, Button, Typography, Grid } from "@mui/material";
import gemOnPad from "../../images/container-main-image.png";
import heroBtn from "../../images/hero-btn.png"

import "./main.css";

export default function MainContent() {
  return (
    <Container
      disableGutters
      sx={{
        margin: '0 auto',
        padding: '0 16px',
      }}
    >
      <Grid container sx={{'@media(max-width:1200px)':{
        alignItems : "center"
      },
      "@media (max-width : 900px)":{
        justifyContent : "center"
      }
      }}>

        <Grid item xs={12} sm={8} md={6} className="hero-block" sx={{ width: '50%', color: '#fff', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <Typography variant="h2" sx={{
                fontFamily: "Metal Mania",
                fontSize: "6.4em",
                lineHeight: "84px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                "@media ( max-width : 1200px ) and (min-width : 1000px)" :{
                  fontSize: "5.4em",
                  lineHeight: "62px",
                },
                "@media ( max-width : 1000px ) and (min-width : 900px)" :{
                  fontSize: "4.4em",
                  lineHeight: "52px",
                },
                "@media (max-width : 900px)":{
                  fontSize: "5.4em",
                  lineHeight: "62px",
                  alignItems : "center"
                },
                "@media (max-width : 550px)":{
                  fontSize: "4.4em",
                  lineHeight: "52px",
                },
                "@media (max-width : 450px)":{
                  fontSize: "3.4em",
                  lineHeight: "42px",
                },
          }}>
            you want <span style={{    color: "#7ADBE5"}}> game gem coin </span>
          </Typography>
          <Typography variant="body1" sx={{
               fontFamily: "Marcellus SC",
               fontSize: "18px",
               fontWeight: "500",
               lineHeight: "24px",
               textAlign: "left",
               width: "80%",
               "@media ( max-width : 1200px ) and (min-width : 1000px)" :{
                fontSize: "16px",
                lineHeight: "20px",
              },
              "@media ( max-width : 1000px ) and (min-width : 900px)" :{
                fontSize: "14px",
                lineHeight: "18px",
              },
              "@media (max-width : 900px)":{
                textAlign : "center",
                margin : "auto"
              },
              "@media (max-width : 550px)":{
                fontSize: "16px",
                lineHeight: "20px",
              },
              "@media (max-width : 450px)":{
                fontSize: "14px",
                lineHeight: "16px",
              },
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble
          </Typography>

          <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px', height: '80px' ,
                          "@media (max-width : 900px)":{
                            margin : "auto"
                          }
          }}>
          <Box
            sx={{
              width: '180px',
              height: '80px',
              backgroundImage: `url(${heroBtn})`,
              backgroundSize : "contain",
              backgroundRepeat : "no-repeat",
            }}
            >
            <Button
              sx={{
                fontSize: '24px',
                fontFamily: '"Metal Mania", system-ui',
                padding: '6px 22px',
                textTransform: 'uppercase',
                color: '#fff',
                marginTop : "5px",
                '@media ( max-width : 350px )' :{                  
                  fontSize: '20px',
                }
              }}
              >
              whitepaper
            </Button>
          </Box>
          </Box>
        </Grid>


<Grid item xs={12} sm={8} md={6} sx={{width : "50%" , position : "relative"}} className="hero-img-block-bck">

        <Box className="hero-img-block" sx={{ width: '100%', position: 'relative' }}>
          <img src={gemOnPad} alt="Gem Coin" />
        </Box>
</Grid>
        
      </Grid>
    </Container>
  );
}
