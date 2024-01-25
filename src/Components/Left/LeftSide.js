import React, { Component } from "react";
import NavBar from "./NavBar";
import Socials from "./Socials";
import AboutMe from "./AboutMe";
import { Show, Hide } from '@chakra-ui/react'
class LeftSide extends Component{
    render(){
        return(
            <>
                 <AboutMe/>
                 <Hide below='md'>
                 <NavBar/>
                </Hide>
                
                 <Socials/>
            </>
        )
       

    }
}

export default LeftSide;