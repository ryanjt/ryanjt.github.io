import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import { Card, CardHeader, CardBody, CardFooter, Text, Badge, Heading, Box, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, } from '@chakra-ui/react'

class Projects extends Component {
    state = { projects: [], isLoading: true, error: null };

    async componentDidMount() {
        try {
            const response = await fetch('https://api.github.com/users/ryanjt/repos');
            const data = await response.json();
            this.setState({ projects: data, isLoading: false })
        } catch (error) {
            this.setState({ error: error.message, isLoading: false })
        }

    }

    renderProject() {
        const { projects, isLoading, error } = this.state;

        if (error) {
            return <div>{error}</div>;
        }

        if (isLoading) {
            return <div>Loading...</div>;
        }

        return projects.map(item => (
            <Accordion allowToggle alignContent="center">

                <ProjectCard key={item.id} project={item} />
            </Accordion>

        ));
    }


    render() {

        return (
            <>
                <Box m="2">
                    {

                        this.renderProject()

                    }
                </Box>

            </>
        )


    }




}

export default Projects;