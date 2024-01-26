import React, { Component } from "react";
import { Card, CardBody, CardFooter, Text, Badge, Heading, Box, SimpleGrid } from '@chakra-ui/react'
class ExperienceCard extends Component {
    render() {
        return (
            <>

                <SimpleGrid columns={2} spacing={10}>
                    <Text>{this.getReadableDate(this.props.experience.StartDate, this.props.experience.EndDate)}</Text>
                    <Card mt="2" w="90">
                        <CardBody>
                            <Heading as="h2" size="lg">{this.props.experience.Role} · {this.props.experience.Company}</Heading>
                            <Text fontSize='lg'>{this.props.experience.Description}</Text>

                        </CardBody>
                        <CardFooter alignContent="center" m="2">

                            <Box>
                                {
                                    Object.values(this.props.experience.Tags).map(tag => {

                                        return (
                                            <Badge colorScheme='brand' m="2">{tag}</Badge>
                                        )
                                    })
                                }
                            </Box>


                        </CardFooter>
                    </Card>
                </SimpleGrid>


            </>
        )


    }

    getReadableDate(startDate, endDate) {
        const start = new Date(startDate); 
        const end = new Date(endDate);

        const startMonth = start.toLocaleString('default', { month: 'long' });
        const startYear = start.getFullYear();
       
        const endMonth = end.toLocaleString('default', { month: 'long' });
        const endYear = end.getFullYear();

        return `${startMonth} ${startYear} - ${endMonth} ${endYear}`
    }
}

export default ExperienceCard;