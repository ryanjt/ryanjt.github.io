import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter, Text, Badge, Heading, Box, Button, Link, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
class ProjectCard extends Component {
    render() {
        return (
            <>

<AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <Heading as="h2" size="lg">{this.props.project.name}  {
                            <Badge colorScheme='green' m="2">{this.props.project.language}</Badge>
                        }</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text>{this.props.project.description}</Text>
                       
                          <Link href={this.props.project.html_url}>
                       <Button link rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                            View project
                        </Button>
                       </Link>
    </AccordionPanel>
  </AccordionItem>
               
            </>
        )


    }
}

export default ProjectCard;