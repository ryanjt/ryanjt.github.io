import React, { Component } from "react";
import ExperienceCard from "./ExperienceCard";
import experienceData from "../../Data/experience";
class Experience extends Component {
    render() {
        return (
            <>
                
                {
                    
                     Object.values(experienceData).map(item => {
                      
                        return (
                            <ExperienceCard key={item.Id} experience={item} />
                        )
                    })
            
                }
            </>
        )


    }


}

export default Experience;