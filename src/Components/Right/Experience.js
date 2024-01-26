import React, { Component } from "react";
import ExperienceCard from "./ExperienceCard";
import experienceData from "../../Data/experience";
import { Box, Heading } from '@chakra-ui/react'
import SectionHeader from "../SectionHeader";

class Experience extends Component {
    render() {
        return (
            <>
              <SectionHeader title="Experience"/>
                <Box pt="30" m="4">
                {
                    
                    Object.values(experienceData).map(item => {
                     
                       return (
                           <ExperienceCard key={item.Id} experience={item} />
                       )
                   })
           
               }
                </Box>
              
            </>
        )


    }


}

export default Experience;