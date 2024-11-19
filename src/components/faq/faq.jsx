import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./faq.css"
import { Container , Box , Typography} from '@mui/material';

export default function Faq () {
    return <>
    <section id='faq-section'>
        <Container>

        <Box className="roadmap-block">

<Box className="section-head">
<Box className="section-lineLeft"></Box>
<Box className="secondary-heading-block">
<Typography className="heading-grd fnt-sml" variant="h2">
game gem coin faq
</Typography>
</Box>
<Box className="section-line"></Box>
</Box>
</Box>

      <Accordion className="faq-accord"
      sx={{
        color: "#fff" ,
        backgroundImage: "linear-gradient(#537b8f , #264352) ",
        padding: "10px 20px",
                        marginBottom : "10px",
                     borderRadius : "12px",
                     opacity : "0.7"
      }}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{margin : "0px"}}
          >
          <Typography
          sx={{
            fontFamily : "Metal Mania",
            fontSize : "20px" ,
          }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant='body1' sx={{textAlign : "left", fontSize : "14px" , opacity : "0.8"}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="faq-accord"
            sx={{
                color: "#fff" ,
                backgroundImage: "linear-gradient(#537b8f , #264352) ",
                padding: "10px 20px",
                                marginBottom : "10px"
                                , borderRadius : "12px",
                     opacity : "0.7"
              }}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{margin : "0px" }}
          >
          <Typography
          sx={{
            fontFamily : "Metal Mania",
            fontSize : "20px" 
            , opacity : "1"
          }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant='body1' sx={{textAlign : "left", fontSize : "14px" , opacity : "0.8"}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion className="faq-accord"
            sx={{
                color: "#fff" ,
                backgroundImage: "linear-gradient(#537b8f , #264352) ",
                padding: "10px 20px",
                                marginBottom : "10px"
                                , borderRadius : "12px",
                     opacity : "0.7"
              }}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{margin : "0px" }}
          >
          <Typography
          sx={{
            fontFamily : "Metal Mania",
            fontSize : "20px" ,
          }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body1' sx={{textAlign : "left", fontSize : "14px" , opacity : "0.8"}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion className="faq-accord"
            sx={{
                color: "#fff" ,
                backgroundImage: "linear-gradient(#537b8f , #264352) ",
                padding: "10px 20px",
                marginBottom : "10px"
                , borderRadius : "12px",
                     opacity : "0.7"
              }}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{margin : "0px"}}
          >
          <Typography
          sx={{
            fontFamily : "Metal Mania",
            fontSize : "20px" ,
          }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant='body1' sx={{textAlign : "left", fontSize : "14px" , opacity : "0.8"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
              </Container>
    </section>
            </>
}