import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter, Text, Badge, Heading, Box } from '@chakra-ui/react'
class ExperienceCard extends Component {
    render() {
        return (
            <>


                <Card>
                    <CardBody>
                        <Heading as="h2" size="lg">{this.props.experience.Role} · {this.props.experience.Company}</Heading>
                        <Text fontSize='lg'>{this.props.experience.Description}</Text>

                    </CardBody>
                    <CardFooter alignContent="center">

                        <Box alignContent="center">
                            {
                                Object.values(this.props.experience.Tags).map(tag => {

                                    return (
                                        <Badge colorScheme='green' m="2">{tag}</Badge>
                                    )
                                })
                            }
                        </Box>


                    </CardFooter>
                </Card>
            </>
        )


    }
}

export default ExperienceCard;