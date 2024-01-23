import React, { Component } from "react";
import NavBar from "./NavBar";
import Socials from "./Socials";
import { Text, Heading, Box } from '@chakra-ui/react'
class AboutMe extends Component {
    render() {
        return (
            <>
                <Box m="2">
                    <Heading as="h1"> Ryan Thompson </Heading>
                    <Heading as="h3" size='lg'>.Net Software Engineer</Heading>
                    <Box m="2">
                    <Text fontSize='lg'>I enjoy building software solutions! I love dabbling in front end and backend development.</Text>
                    </Box>
                  
                </Box>

            </>
        )


    }
}

export default AboutMe;