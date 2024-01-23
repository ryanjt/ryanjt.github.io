import React, { Component } from "react";
import NavBar from "./NavBar";
import Socials from "./Socials";
import AboutMe from "./AboutMe";
class LeftSide extends Component{
    render(){
        return(
            <>
                 <AboutMe/>
                 <NavBar/>
                 <Socials/>
            </>
        )
       

    }
}

export default LeftSide;