import "./roadmap.css"
import { Box , Container, Typography } from "@mui/material"
import ufoImg from "../../images/rdmap-ufo.png"
import { useRef } from "react"
import gsap from "gsap"

export default function Roadmap () {


let phase1 = useRef(null)
let phase2 = useRef(null)
let phase3 = useRef(null)
let phase4 = useRef(null)

let condition = true

const triggerAnimation1st = ( ) => {
// if(condition){
    gsap.fromTo(
        phase1.current,
        {
            opacity : 0,
            x : "-100%"
        },
        {
            opacity :1,
            x : "0%",
            duration : 2
        }
    )
// }
// condition = false
}
const triggerAnimation2nd = ( ) => {
    // if(condition){
        gsap.fromTo(
            phase2.current,
            {
            opacity : 0,
            x : "100%"
        },
        {
            opacity :1,
            x : "0%",
            duration : 2
        }
    )
// }
// condition = false
}
const triggerAnimation3rd = ( ) => {
    // if(condition){
        gsap.fromTo(
        phase3.current,
        {
            opacity : 0,
            x : "-100%"
        },
        {
            opacity :1,
            x : "0%",
            duration : 2
        }
    )
// }
// condition = false
}
const triggerAnimation4th = ( ) => {
// if(condition){
    gsap.fromTo(
        phase4.current,
        {
            opacity : 0,
            x : "100%"
        },
        {
            opacity :1,
            x : "0%",
            duration : 2
        }
    )
// }
// condition = false
}



    return <>
    <Box  component="section" className="roadmap-section">

    <Container sx={{paddingLeft : "0px" , paddingRight : "0"}}>
<Box sx={{"@media (max-width : 1200px )" : {
    width : "89%" ,
    margin : 'auto'
}}}>

        <Box className="roadmap-block">
<Box sx={{ width : "100%" , height : "300px" ,
    "@media ( max-width : 1100px )" :{
        height : "250px"
    },
    "@media ( max-width : 900px )" :{
        height : "200px"
    },
    "@media ( max-width : 750px )" :{
        height : "150px"
    },
    "@media ( max-width : 600px )" :{
        height : "100px"
    },
    "@media ( max-width : 500px )" :{
        height : "50px"
    },
}}>
    <img className="ufo_img" src={ufoImg}></img>
</Box>
<Box className="section-head">
<Box sx={{width:"300px",
                                           '@media (max-width:950px)':{
                                               width : "200px"
                                            },
                                            '@media (max-width:650px)':{
                                                width : "150px"
                                            },
                                        }}  className="section-lft-line"></Box>
<Box>
<Typography className="heading-grd" variant="h2"sx={{ fontSize : "4.2em", fontFamily : "Metal Mania",
                                '@media(max-width:1120px )' : {
                                 lineHeight: "52px",},
                                 '@media(max-width:850px )' : {
                                 fontSize : "3.2em",
                                 lineHeight : "38px"
                                 },
                                 '@media(max-width:720px )' : {
                                 fontSize : "2.6em",
                                 },
                                 '@media(max-width:520px )' : {
                                 fontSize : "2.2em",
                                 },
                                 '@media(max-width:400px )' : {
                                 fontSize : "1.6em",
                                 lineHeight : "30px"
                                 }}}>
game gem coin ROADMAP
</Typography>
</Box>
<Box sx={{width:"300px",
                                           '@media (max-width:950px)':{
                                               width : "200px"
                                            },
                                            '@media (max-width:650px)':{
                                                width : "150px"
                                            },
                                        }}  className="section-rgt-line"></Box>
</Box>

</Box>

<Box className="roadmap-content">

    <Box onMouseEnter={triggerAnimation1st} 

    ref={phase1} className="roadmap-content-block content-block-1st" sx={{
        '@media (max-width : 650px)':{
            padding : "0 0 30px 30px"
        },
    }}>
        <Box className="roadmap-head-block">

        <Box className="tertiary-heading-block">
            <Typography
            sx={{
                fontSize: "1.5em",
                padding: "4px 36px",
                fontFamily: "Metal Mania",
                color: "#fff",
                textTransform: "uppercase",
            }} variant="h3">phase 1</Typography>
        </Box>
        <Box className="roadmap-style-block"></Box>
    </Box>

    <Box className="tertiary-text-block">
    <Typography variant="body1" sx={{
            fontFamily: "Inter",
            padding: "30px 0 30px 60px",
            width: "90%",
            lineHeight: "28px",
            textAlign: "left",
            color: "#fff",
            opacity: "0.9",
            '@media ( max-width : 800px )':{
                lineHeight: "20px",
                fontSize : "0.8em"
                },
                '@media ( max-width : 650px )':{
                    fontSize : "0.7em",
                    padding :"15px 0 15px 35px",
                    },
        '@media (max-width : 400px)':{
            padding : "15px 0 15px 15px"
        },
        }}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
        </Typography>
        </Box>
        </Box>

        <Box ref={phase2} onMouseEnter={triggerAnimation2nd} className="roadmap-content-block content-block-2nd" sx={{
                    '@media (max-width : 650px)':{
                        padding : "0 30px 30px 0"
                    },
        '@media (max-width : 400px)':{
            padding : "0 30px 30px 15px"
        },
        }}>
            <Box sx={{display:"flex"}}>

<Box sx={{width:"80px"}}></Box>
        <Box className="roadmap-head-block" sx={{width:"100%"}}>
        <Box className="tertiary-heading-block" sx={{width:"75%" , "@media (max-width:420px)":{width : "90%"}}}>
            <Typography variant="h3"             sx={{
                fontSize: "1.5em",
                padding: "4px 36px",
                fontFamily: "Metal Mania",
                color: "#fff",
                textTransform: "uppercase",
            }} >phase 2</Typography>
        </Box>
        <Box className="roadmap-style-block" sx={{width:"75%","@media (max-width:420px)":{width : "90%"}}}></Box>
    </Box>
            </Box>

    <Box className="tertiary-text-block">
    <Typography variant="body1" sx={{
            fontFamily: "Inter",
            padding: "30px 0 30px 60px",
            width: "90%",
            lineHeight: "28px",
                textAlign: "left",
                color: "#fff",
                opacity: "0.9",
                '@media ( max-width : 800px )':{
                    lineHeight: "20px",
                    fontSize : "0.8em"
                    },
                    '@media ( max-width : 650px )':{
                        fontSize : "0.7em",
                        padding :"15px 0 15px 35px",
                        },                    
        '@media (max-width : 400px)':{
            padding : "15px 0 15px 15px"
        },
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
        </Typography>
        </Box>
        </Box>

        <Box ref={phase3} onMouseEnter={triggerAnimation3rd} className="roadmap-content-block content-block-3rd" sx={{
                    '@media (max-width : 650px)':{
                        padding : "0 0 30px 30px"
                    }
        }}>
        <Box className="roadmap-head-block bfr-line">

        <Box className="tertiary-heading-block">
            <Typography             sx={{
                fontSize: "1.5em",
                padding: "4px 36px",
                fontFamily: "Metal Mania",
                color: "#fff",
                textTransform: "uppercase",
            }}  variant="h3">phase 3</Typography>
        </Box>
        <Box className="roadmap-style-block"></Box>
    </Box>

    <Box className="tertiary-text-block">
    <Typography variant="body1" sx={{
            fontFamily: "Inter",
            padding: "30px 0 30px 60px",
            width: "90%",
            lineHeight: "28px",
                textAlign: "left",
                color: "#fff",
                opacity: "0.9",
                '@media ( max-width : 800px )':{
                    lineHeight: "20px",
                    fontSize : "0.8em"
                    },
                    '@media ( max-width : 650px )':{
                        fontSize : "0.7em",
                        padding :"15px 0 15px 35px",
                        },
                        '@media (max-width : 400px)':{
                            padding : "15px 0 15px 15px"
                        },
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
        </Typography>
        </Box>
        </Box>

        <Box ref={phase4} onMouseEnter={triggerAnimation4th} className="roadmap-content-block content-block-4th"sx={{
                    '@media (max-width : 650px)':{
                        padding : "0 30px 30px 0"
                    }
        }}>
                        <Box sx={{display:"flex"}}>

<Box sx={{width:"80px"}}></Box>
        <Box className="roadmap-head-block" sx={{width:"100%"}}>
        <Box className="tertiary-heading-block" sx={{width:"75%","@media (max-width:420px)":{width : "90%"}}}>
            <Typography variant="h3"             sx={{
                fontSize: "1.5em",
                padding: "4px 36px",
                fontFamily: "Metal Mania",
                color: "#fff",
                textTransform: "uppercase",
            }} >phase 4</Typography>
        </Box>
        <Box className="roadmap-style-block" sx={{width:"75%","@media (max-width:420px)":{width : "90%"}}}></Box>
    </Box>
    </Box>

    <Box className="tertiary-text-block">
        <Typography variant="body1" sx={{
            fontFamily: "Inter",
            padding: "30px 0 30px 60px",
            width: "90%",
            lineHeight: "28px",
                textAlign: "left",
                color: "#fff",
                opacity: "0.9",
                '@media ( max-width : 800px )':{
                    lineHeight: "20px",
                    fontSize : "0.8em"
                    },
                '@media ( max-width : 650px )':{
                    fontSize : "0.7em",
                    padding :"15px 0 15px 35px",
                    },
                    '@media (max-width : 400px)':{
                        padding : "15px 0 15px 15px"
                    },
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
        </Typography>
        </Box>
        </Box>

<Box className="roadmap-content-block content-block-5th"></Box>

</Box>

</Box>
    </Container>
    </Box>
    </>
}