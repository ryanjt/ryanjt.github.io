import React, { Component } from "react";
import AboutMeDetail from "./AboutMeDetail";
import Experience from "./Experience";
import Projects from "./Projects";
import { Box } from '@chakra-ui/react'
class RightSide extends Component{
    render(){
        return(
            <>
            <Box mt="20">
            <AboutMeDetail/>
                <Experience/>
                <Projects/>
            </Box>
              
            </>
        )
       

    }
}

export default RightSide;