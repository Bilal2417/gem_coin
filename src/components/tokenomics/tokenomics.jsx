import "./tokenomics.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import tokenchart from "../../images/toknChartImg.png";
import tokenImg from "../../images/usingPadMain.png";
import gsap from "gsap";
import { useRef } from "react";

export default function Tokenomics() {
  const sectionRef = useRef(null);

  const startAnimation = () => {
    gsap.to(sectionRef.current, {
      scale: 1.1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const endAnimation = () => {
    gsap.to(sectionRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <>
      <Box
        ref={sectionRef}
        onMouseEnter={startAnimation}
        onTouchStart={startAnimation}
        onMouseLeave={endAnimation}
        onTouchEnd={endAnimation}
        component="section"
        className="token-block"
        sx={{
          position: "relative",
          "&:after": {
            content: '""',
            backgroundImage: `url(${tokenImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            left: "0",
            height: "100%",
            width: "400px",
            opacity: "0.2",
            transform: "rotateY(180deg)",
            bottom: "0",
          },
          "@media (max-width : 500px )": {
            "&:after": {
              width: "300px",
              height: "80%",
            },
          },
          "@media (max-width : 350px )": {
            "&:after": {
              width: "250px",
            },
          },
        }}
      >
        <Container
          sx={{
            paddingLeft: "0",
            paddingRight: "0",
          }}
        >
          <Box className="section-head">
            <Box
              sx={{
                width: "300px",
                "@media (max-width:950px)": {
                  width: "200px",
                },
                "@media (max-width:650px)": {
                  width: "150px",
                },
              }}
              className="section-lft-line"
            ></Box>
            <Box>
              <Typography
                className="heading-grd"
                variant="h2"
                sx={{
                  fontSize: "4.2em",
                  fontFamily: "Metal Mania",
                  "@media(max-width:1120px )": {
                    lineHeight: "52px",
                  },
                  "@media(max-width:850px )": {
                    fontSize: "3.2em",
                  },
                  "@media(max-width:720px )": {
                    fontSize: "2.6em",
                  },
                }}
              >
                tokenomics
              </Typography>
            </Box>
            <Box
              sx={{
                width: "300px",
                "@media (max-width:950px)": {
                  width: "200px",
                },
                "@media (max-width:650px)": {
                  width: "150px",
                },
              }}
              className="section-rgt-line"
            ></Box>
          </Box>

          <Grid
            container
            spacing={2}
            justifyContent={"center"}
            sx={{
              maxWidth: "80% !important",
              margin: "auto",
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                justifyContent: "center",
                //    "&:before":{
                //                            content: '""',
                //                            backgroundImage : `url(${tknchart})`,
                //        backgroundSize : "contain",
                //        backgroundRepeat : "no-repeat",
                //        width: "80%",
                //        height: "80%",
                //        position : "absolute",
                //        left : "15%"
                //    },
              }}
              className="tokenChartBlock"
            >
              {/* <Box sx={{position : "relative",zIndex : "1"}}> */}
              <Box
                sx={{
                  position: "relative",
                  height: "400px",
                  "&:before": {
                    width: "100%",
                    height: "100%",
                    content: '""',
                    position: "absolute",
                    top: "0",
                    left: "0",
                    backgroundImage: `url(${tokenchart})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  },
                  "@media (max-width : 500px )": {
                    height: "200px",
                  },
                }}
              >
                {/* <img src={tokenchart}/> */}
              </Box>

              {/* <Box sx={{display : "flex", flexDirection : "column" ,gap : "35px", margin : "50px 0" , position : "absolute",top : "0", width : "130%" , zIndex : "-1"}}>

    <Box sx={{display : "flex" , alignItems : "center" , marginLeft : "-100px" }}>
        <Box>
        <Typography variant="body1" sx={{
            textTransform : "uppercase",
            fontFamily : "Metal Mania",
            color : "#7DCCF4",
            fontSize : "24px"            ,
            "@media (max-width : 1000px )":{
                fontSize : "18px"            ,
            }
        }}>Open public sale</Typography>
        <Typography variant="body1" sx={{
                        textTransform : "uppercase",
                        fontFamily : "Montserrat",
                        color : "#fff",
                        fontSize : "18px",
                        "@media (max-width : 1000px )":{
                            fontSize : "14px"            ,
                        }
        }}>25.80%</Typography>
        </Box> 
                        <Box sx={{width : "100px"}}>
                    ,    <img src={oPublic}/>
                        </Box>
    </Box>

<Box sx={{alignSelf : "flex-end"}}>

    <Box sx={{display : "flex" , alignItems : "center"}}>
        <Box sx={{width : "100px"}}>
        <img src={bLimit}/>
        </Box>
        <Box>
        <Typography variant="body1" sx={{
            textTransform : "uppercase",
            fontFamily : "Metal Mania",
            color : "#7DCCF4",
            fontSize : "24px"       ,
            "@media (max-width : 1000px )":{
                fontSize : "18px"            ,
            }     
        }}>burning limit</Typography>
        <Typography variant="body1" sx={{
                        textTransform : "uppercase",
                        fontFamily : "Montserrat",
                        color : "#fff",
                        fontSize : "18px",
                        "@media (max-width : 1000px )":{
                            fontSize : "14px"            ,
                        }
                    }}>50%</Typography>
        </Box> 
    </Box>
                    </Box>

                    <Box sx={{display : "flex" , alignItems : "center"  ,marginLeft : "-85px"}}>
        <Box sx={{
                      "@media (max-width : 1000px )":{
                        marginLeft : "-15px"           ,
                    }
        }}>
        <Typography variant="body1" sx={{
            textTransform : "uppercase",
            fontFamily : "Metal Mania",
            color : "#7DCCF4",
            fontSize : "24px"      ,
            "@media (max-width : 1000px )":{
                fontSize : "18px"            ,
            }      
        }}>Presale Launch</Typography>
        <Typography variant="body1" sx={{
                        textTransform : "uppercase",
                        fontFamily : "Montserrat",
                        color : "#fff",
                        fontSize : "18px",
                        "@media (max-width : 1000px )":{
                            fontSize : "14px"            ,
                        }
        }}>11.3%</Typography>
        </Box> 
                        <Box sx={{width : "100px"}}>
                        <img src={oPublic}/>
                        </Box>
    </Box>

    </Box>
<Box sx={{display : "flex" , alignItems : "center" , width : "70%" , position : "absolute", bottom : "0" , zIndex : "-1" , marginBottom : "-35px"}}>
<Box sx={{display : "flex" , alignItems : "center"}}>
        <Box>
        <Typography variant="body1" sx={{
            textTransform : "uppercase",
            fontFamily : "Metal Mania",
            color : "#7DCCF4",
            fontSize : "18px"        ,
            "@media (max-width : 1000px )":{
                fontSize : "14px"            ,
            }    
        }}>company share</Typography>
        <Typography variant="body1" sx={{
                        textTransform : "uppercase",
                        fontFamily : "Montserrat",
                        color : "#fff",
                        fontSize : "18px",
                        "@media (max-width : 1000px )":{
                            fontSize : "12px"            ,
                        }
        }}>6.5%</Typography>
        </Box> 
    </Box>

    <Box sx={{display : "flex" , alignItems : "center"}}>
        <Box>
            <Box sx={{width : "80px" , marginLeft : "35px" , marginTop :  "-10px"}}>
            <img src={rShare}/>
            </Box>
        <Typography variant="body1" sx={{
            textTransform : "uppercase",
            fontFamily : "Metal Mania",
            color : "#7DCCF4",
            fontSize : "18px"       ,
            "@media (max-width : 1000px )":{
                fontSize : "14px"            ,
            }     
        }}>reward share</Typography>
        <Typography variant="body1" sx={{
                        textTransform : "uppercase",
                        fontFamily : "Montserrat",
                        color : "#fff",
                        fontSize : "18px",
                        "@media (max-width : 1000px )":{
                            fontSize : "12px"            ,
                        }
        }}>11.3%</Typography>
        </Box> 
    </Box>
</Box> 
</Box> */}
            </Grid>
            <Grid item xs={12} md={6} className="tokenImgBlock">
              <img src={tokenImg} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
