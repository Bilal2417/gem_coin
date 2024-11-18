import { Container, Box, Button } from "@mui/material";
import gemOnPad from "../../images/container-main-image.png";
import btnBckImg from "../../images/btnBck.png";
import Vector55 from "../../images/Vector55.png";
import Vector58 from "../../images/Vector58.png";
import "./main.css";

export default function MainContent() {
  return (
    <Container
      disableGutters
      sx={{
        maxWidth: '1400px !important',
        margin: '0 auto',
        padding: '0 16px',
      }}
    >
      <Box className="main-block" sx={{ display: 'flex', alignItems: 'center' }}>

        <Box className="main-content-block" sx={{ width: '50%', color: '#fff', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <h2 className="main-content-heading">
            you want <span> game gem coin </span>
          </h2>
          <p className="main-content-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble
          </p>

          <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px', height: '80px' }}>
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
              whitepaper
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

        <Box className="main-img-block" sx={{ width: '50%', position: 'relative' }}>
          <img src={gemOnPad} alt="Gem Coin" />
        </Box>
      </Box>
    </Container>
  );
}
