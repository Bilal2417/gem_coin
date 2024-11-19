import React from 'react';
import { Button, Container, Box, Typography, Grid } from '@mui/material';
import headerLogo from "../../images/game-gem-coin-img.png";
import mainBackImg from "../../images/main-back-img.png";
import btnBckImg from "../../images/btnBck.png";
import Vector55 from "../../images/Vector55.png";
import Vector58 from "../../images/Vector58.png";
import MainContent from '../main_gem-content/mainContent';


const GemMain = () => {
    // const CustomContainer = styled(Box)({
    //     maxWidth: '1400px',
    //     margin: '0 auto', 
    //     padding: '0 16px',
    //   });
  return (

    <Box
      sx={{
        backgroundImage: `url(${mainBackImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '128vh',
      }}
      >
      <Container
      disableGutters
      sx={{
        maxWidth: '1400px !important',
        margin: '0 auto',  
        padding: '0 16px',  
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 0' }}>

          <Box sx={{
            display: "flex" ,
            alignItems:" center"
          }}>
          <Box sx={{ width: '180px', height: '180px' ,
                width: "180px",
                height: "180px",
                display: "flex ",
                alignItems:" center",
                justifyContent : "right",
              }}>
            <img src={headerLogo} alt="game gem coin img" style={{ width: '120%', position: 'relative' }} />
          </Box>

          <Box sx={{ color: '#fff', fontFamily: '"Marcellus SC", serif', fontWeight: 400, width: '700px' , marginLeft : "-50px"}}>
            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'center',
                gap: '40px',
                padding: '20px 0',
                borderTop: '3px solid #fff',
                borderBottom: '3px solid #fff',
                boxShadow: '-15px 1px 20px #00C2AC',
                fontFamily: "Marcellus SC" ,
              }}
              >
              <Box component="li" sx={{ textTransform: 'uppercase' }}>
                <Typography variant="body1" component="a" href="#" sx={{ color: '#fff', textDecoration: 'none' ,  fontFamily: "Marcellus SC" 
                    ,      "&:hover": {
                            textDecoration: "underLine",  
                            color : "white"
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
            }}
            >
            <Box
              sx={{
                content: '""',
                backgroundImage: `url(${btnBckImg})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: '200px',
                height: '100%',
                position: 'absolute',
                top: 0,
              }}
              />
            <Button
              sx={{
                fontSize: '28px',
                fontFamily: '"Metal Mania", system-ui',
                backgroundImage: 'linear-gradient(#80D4FF, #034161)',
                padding: '8px 22px',
                position: 'relative',
                zIndex: 1,
                textTransform: 'uppercase',
                color: '#fff',
              }}
              >
              <Box
                sx={{
                  content: '""',
                  backgroundImage: `url(${Vector55})`,
                  width: '25px',
                  height: '25px',
                  position: 'absolute',
                  left: '-5px',
                  top: '50%',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                }}
                />
              Buy Now
              <Box
                sx={{
                  content: '""',
                  backgroundImage: `url(${Vector58})`,
                  width: '20px',
                  height: '20px',
                  position: 'absolute',
                  left: '50%',
                  top: '-5px',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                }}
                />
            </Button>
          </Box>
        </Box>
      </Container>
      <MainContent/>
    </Box>
  );
};

export default GemMain;
