import React from 'react';
import { Button, Container, Box, Typography, Grid } from '@mui/material';
import headerLogo from "../../images/game-gem-coin-img.png";
import mainBackImg from "../../images/main-back-img.png";
import heroBtn from "../../images/hero-btn.png"
import MainContent from '../main_gem-content/mainContent';
import "./gemCoin.css"
import { ViewHeadline } from '@mui/icons-material';


export default function GemMain  ()  {

  const navHead = () => {
    const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".hide");


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
        <Box sx={{ display: 'flex',  alignItems: 'center', padding: '2rem 0' ,
          '@media (max-width : 899.70px )':{
            justifyContent : "space-between"
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

          <Box component="nav" className=" hide" sx={{
                       width : '100%'
          }}>
          <Box  className="main-nav" sx={{ color: '#fff', fontFamily: '"Marcellus SC", serif', fontWeight: 400,  display: "flex" ,
            alignItems:" center",
            justifyContent : "space-between",
            width : "100%",  marginLeft : "-50px" ,    
                  // "@media (max-width : 1200px )":{
                  //   width : "60%",
                  //   marginLeft : "-35px"
                  // },
                  "@media (max-width : 899.70px )":{
                  flexDirection: 'column',
                  justifyContent: 'center',
               }
                  }}>
            <Box className="bck-img"
              component="ul"
              sx={{
                width : "65%",
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems : "center",
                gap: '30px',
                padding: '20px 0',
                borderTop: '3px solid #fff',
                borderBottom: '3px solid #fff',
                boxShadow: '-15px 1px 20px #00C2AC',
                fontFamily: "Marcellus SC" ,
                position : "relative",
                  "@media (max-width : 1000px )":{
                    width : "60%",
                 gap : "15px"
                },
                "@media (max-width : 899.70px )":{
                    gap : "25px",
                 boxShadow : "none",
                  flexDirection : "column",
                  fontSize : "1.4em",
                  border : "none"
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
                },
                          "@media (max-width : 899.70px )":{
                            fontSize: "1.2em",                      
                },
                
                }}>
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
                            },
                            
                          "@media (max-width : 899.70px )":{
                            fontSize: "1.2em",                      
                },
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
                            },
                            "@media (max-width : 899.70px )":{
                              fontSize: "1.2em",                      
                  },
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
                            },
                            "@media (max-width : 899.70px )":{
                              fontSize: "1.2em",                      
                  },
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
                            },
                            "@media (max-width : 899.70px )":{
                              fontSize: "1.2em",                      
                  },
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
                            },
                            "@media (max-width : 899.70px )":{
                              fontSize: "1.2em",                      
                  },
                }}>
                  FAQs
                </Typography>
              </Box>
            </Box>

          <Box
            sx={{
              width: 'fit-content',
              // '@media ( max-width : 350px )' :{                  
              //   width: '140px',
              // }
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
</Box>
<Box sx={{display:"none",
  '@media (max-width :899.70px)':{
    display : "block"
  }
}}>
  <Button onClick={navHead} sx={{zIndex : "4",
    "&:focus":{
      outline : "none"
    }
  }}>

  <ViewHeadline sx={{color:"#fff",width:"50px",height : "50px"}}/>
  </Button>
                </Box>

        </Box>
      </Container>
      <MainContent/>
    </Box>
  );
};


