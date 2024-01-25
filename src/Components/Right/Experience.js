import React, { Component } from "react";
import ExperienceCard from "./ExperienceCard";
import experienceData from "../../Data/experience";
import { Box } from '@chakra-ui/react'
class Experience extends Component {
    render() {
        return (
            <>
                <Box pt="35" m="4">
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