import React, { Component } from "react";
import NavBar from "./NavBar";
import Socials from "./Socials";
import AboutMe from "./AboutMe";
import { Show, Hide, Box } from '@chakra-ui/react'
class LeftSide extends Component{
    render(){
        return(
            <>
            <Box mt="10">
            <AboutMe/>
                 <Hide below='md'>
                 <NavBar/>
                </Hide>
                <Socials/>
            </Box>
                
                
               
            </>
        )
       

    }
}

export default LeftSide;