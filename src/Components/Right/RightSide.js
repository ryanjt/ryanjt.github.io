import React, { Component } from "react";
import AboutMeDetail from "./AboutMeDetail";
import Experience from "./Experience";
import Projects from "./Projects";

class RightSide extends Component{
    render(){
        return(
            <>
                <AboutMeDetail/>
                <Experience/>
                <Projects/>
            </>
        )
       

    }
}

export default RightSide;