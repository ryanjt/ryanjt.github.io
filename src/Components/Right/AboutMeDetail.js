import React, { Component } from "react";
import { Text, Box, Heading } from '@chakra-ui/react'
import SectionHeader from "../SectionHeader";
class AboutMeDetail extends Component{
    render(){
        return(
            <>
            <SectionHeader title="About me"/>
            <Box m="35">
            <Text fontSize="lg" m="4">I have been tinkering and playing around with computers since 10! I love to problem solve, develop, design and tinker with software and hardware!
                    Learning new things and overcoming problems is my passion.
                </Text>
                <Text  fontSize="lg" m="4">
                    From "developing" websites in Word to running private game servers, the enjoyment I recieved from watching things come together and work on a computer lead to developing and learning to become a software engineer! 
                    Completing a HNC/HND, a Batchelors in Software Engineering and finally completing a Masters in Software engineering with a First Class, lead to me becoming a full time professional. 
                </Text>
                <Text  fontSize="lg" m="4">
                    My main focus these days is building projects in .NET and C#. In my free time I continue to further improve my skills by completing personal projects and learning new technical skills.
                </Text>
                <Text  fontSize="lg" m="4">
                   In the times where I'm not sat in front of 2 monitors, I like to hang out with friends or go and explore new things with my girlfriend.
                </Text>
            </Box>
             
            </>
        )
       

    }
}

export default AboutMeDetail;