import React from 'react';
import { Button, Container, Box, Typography, Grid } from '@mui/material';
import headerLogo from "../../images/game-gem-coin-img.png";
import mainBackImg from "../../images/main-back-img.png";
import heroBtn from "../../images/hero-btn.png"
import MainContent from '../main_gem-content/mainContent';
import "./gemCoin.css"


export default function GemMain  ()  {
  const navHead = () => {
    const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");


  headerEl.classList.toggle("nav-open");

  }
  return (

    <Box component="section"
      sx={{
        backgroundImage: `url(${mainBackImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        paddingBottom : "250px",
        "@media ( max-width : 900px )" :{
          paddingBottom : "0px",
        }
      }}
      >
      <Container
      disableGutters
      sx={{
        margin: '0 auto',  
        padding: '0 16px',  
      }}>  
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 0' }}>

          <Box sx={{
            display: "flex" ,
            alignItems:" center",
            "@media (max-width : 1200px )":{
              width : "65%"
            }
          }}>
          <Box className="headerImg" sx={{ 
                width: "150px",
                height: "150px",
                display: "flex ",
                alignItems:" center",
                justifyContent : "right",
                "@media (max-width : 450px )":{
                  width : "120px",
                  height : "120px",
                },
                "@media (max-width : 350px )":{
                  width : "100px",
                  height : "100px",
                }
              }}>
            <img src={headerLogo} alt="game gem coin img" style={{ width: '120%', position: 'relative' , zIndex : '1',
                          "@media (max-width : 1200px )":{
                            width : "100%"
                          }
            }} />
          </Box>

          <Box className="bck-img" sx={{ color: '#fff', fontFamily: '"Marcellus SC", serif', fontWeight: 400, width: '650px' , marginLeft : "-50px" , position : "relative",    
                  "@media (max-width : 1200px )":{
              width : "100%",
              marginLeft : "-35px"
            }}}>
            <Box className='main-nav'
              component="ul"
              sx={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'center',
                gap: '30px',
                padding: '20px 0',
                borderTop: '3px solid #fff',
                borderBottom: '3px solid #fff',
                boxShadow: '-15px 1px 20px #00C2AC',
                fontFamily: "Marcellus SC" ,
                  "@media (max-width : 1050px )":{
                 gap : "15px"
                
              }}}
              >
              <Box component="li" sx={{ textTransform: 'uppercase' }}>
                <Typography variant="body1" component="a" href="#" sx={{ color: '#fff', textDecoration: 'none' ,  fontFamily: "Marcellus SC" 
                    ,      "&:hover": {
                            textDecoration: "underLine",  
                            color : "white"
                          },
                          "@media (max-width : 1050px )":{
                            fontSize: "0.8em",                      
                }}}>
                  About
                </Typography>
              </Box>
              <Box component="li" sx={{ textTransform: 'uppercase' }}>
                <Typography variant="body1" component="a" href="#" sx={{ color: '#fff', textDecoration: 'none' ,fontFamily: "Marcellus SC" 
                                      ,      "&:hover": {
                                        textDecoration: "underLine",  
                                        color : "white"
                                      },
                                      "@media (max-width : 1050px )":{
                                        fontSize: "0.8em",                      
                            }
                }}>
                  Features
                </Typography>
              </Box>
              <Box component="li" sx={{ textTransform: 'uppercase' }}>
                <Typography variant="body1" component="a" href="#" sx={{ color: '#fff', textDecoration: 'none' ,fontFamily: "Marcellus SC"
                                      ,      "&:hover": {
                                        textDecoration: "underLine",  
                                        color : "white"
                                      },
                                      "@media (max-width : 1050px )":{
                                        fontSize: "0.8em",                      
                            }
                }}>
                  Roadmap
                </Typography>
              </Box>
              <Box component="li" sx={{ textTransform: 'uppercase' }}>
                <Typography variant="body1" component="a" href="#" sx={{ color: '#fff', textDecoration: 'none' ,fontFamily: "Marcellus SC"
                                      ,      "&:hover": {
                                        textDecoration: "underLine",  
                                        color : "white"
                                      },
                                      "@media (max-width : 1050px )":{
                                        fontSize: "0.8em",                      
                            }
                }}>
                  Team
                </Typography>
              </Box>
              <Box component="li" sx={{ textTransform: 'uppercase' }}>
                <Typography variant="body1" component="a" href="#" sx={{ color: '#fff', textDecoration: 'none' ,fontFamily: "Marcellus SC"
                                      ,      "&:hover": {
                                        textDecoration: "underLine",  
                                        color : "white"
                                      },
                                      "@media (max-width : 1050px )":{
                                        fontSize: "0.8em",                      
                            }
                }}>
                  Presale
                </Typography>
              </Box>
              <Box component="li">
                <Typography variant="body1" component="a" href="#" sx={{ color: '#fff', textDecoration: 'none' 
                                      ,      "&:hover": {
                                        textDecoration: "underLine", 
                                        color : "white" 
                                      },
                                      "@media (max-width : 1050px )":{
                                        fontSize: "0.8em",                      
                            }
                }}>
                  FAQs
                </Typography>
              </Box>
            </Box>
          </Box>
</Box>

          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '180px',
              height: '80px',
              '@media ( max-width : 350px )' :{                  
                width: '140px',
              }
            }}
            >
            <Button
              sx={{
                fontSize: '24px',
                fontFamily: '"Metal Mania", system-ui',
                backgroundImage: `url(${heroBtn})`,
                backgroundSize : "contain",
                backgroundRepeat : "no-repeat",
                padding: '6px 22px',
                textTransform: 'uppercase',
                color: '#fff',
                '@media ( max-width : 350px )' :{                  
                  fontSize: '18px',
                }
              }}
              >
              Buy Now
            </Button>
          </Box>
        </Box>
      </Container>
      <MainContent/>
    </Box>
  );
};


