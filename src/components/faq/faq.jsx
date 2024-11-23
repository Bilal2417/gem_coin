import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./faq.css";
import { Container, Box, Typography } from "@mui/material";

export default function Faq() {
  return (
    <>
      <Box component="section" id="faq-section">
        <Container>
          <Box className="faq-block">
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
                className="section-lineLeft"
              ></Box>
              <Box>
                <Typography
                  className="heading-grd fnt-sml"
                  variant="h2"
                  sx={{
                    fontSize: "4.2em",
                    fontFamily: "Metal Mania",
                    "@media(max-width:1120px )": {
                      lineHeight: "52px",
                    },
                    "@media(max-width:850px )": {
                      fontSize: "3.2em",
                      lineHeight: "36px",
                    },
                    "@media(max-width:720px )": {
                      fontSize: "2.6em",
                    },
                  }}
                >
                  game gem coin faq
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
                className="section-line"
              ></Box>
            </Box>
          </Box>

          <Accordion
            className="faq-accord"
            sx={{
              color: "#fff",
              backgroundImage: "linear-gradient(#537b8f , #264352) ",
              padding: "10px 20px",
              marginBottom: "10px",
              borderRadius: "12px",
              opacity: "0.7",
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ margin: "0px" }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Metal Mania",
                  fontSize: "20px",
                  textAlign: "left",
                  "@media(max-width:700px)": {
                    fontSize: "18px",
                  },
                  "@media(max-width:650px)": {
                    fontSize: "16px",
                  },
                  "@media(max-width:550px)": {
                    fontSize: "14px",
                  },
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "left",
                  fontSize: "14px",
                  opacity: "0.8",
                  "@media(max-width:700px)": {
                    fontSize: "12px",
                  },
                  "@media(max-width:550px)": {
                    fontSize: "10px",
                  },
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="faq-accord"
            sx={{
              color: "#fff",
              backgroundImage: "linear-gradient(#537b8f , #264352) ",
              padding: "10px 20px",
              marginBottom: "10px",
              borderRadius: "12px",
              opacity: "0.7",
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ margin: "0px" }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Metal Mania",
                  fontSize: "20px",
                  textAlign: "left",
                  "@media(max-width:700px)": {
                    fontSize: "18px",
                  },
                  "@media(max-width:650px)": {
                    fontSize: "16px",
                  },
                  "@media(max-width:550px)": {
                    fontSize: "14px",
                  },
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                sx={{ textAlign: "left", fontSize: "14px", opacity: "0.8" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="faq-accord"
            sx={{
              color: "#fff",
              backgroundImage: "linear-gradient(#537b8f , #264352) ",
              padding: "10px 20px",
              marginBottom: "10px",
              borderRadius: "12px",
              opacity: "0.7",
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ margin: "0px" }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Metal Mania",
                  fontSize: "20px",
                  textAlign: "left",
                  "@media(max-width:700px)": {
                    fontSize: "18px",
                  },
                  "@media(max-width:650px)": {
                    fontSize: "16px",
                  },
                  "@media(max-width:550px)": {
                    fontSize: "14px",
                  },
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                sx={{ textAlign: "left", fontSize: "14px", opacity: "0.8" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="faq-accord"
            sx={{
              color: "#fff",
              backgroundImage: "linear-gradient(#537b8f , #264352) ",
              padding: "10px 20px",
              marginBottom: "10px",
              borderRadius: "12px",
              opacity: "0.7",
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ margin: "0px" }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Metal Mania",
                  fontSize: "20px",
                  textAlign: "left",
                  "@media(max-width:700px)": {
                    fontSize: "18px",
                  },
                  "@media(max-width:650px)": {
                    fontSize: "16px",
                  },
                  "@media(max-width:550px)": {
                    fontSize: "14px",
                  },
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                sx={{ textAlign: "left", fontSize: "14px", opacity: "0.8" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>
    </>
  );
}
