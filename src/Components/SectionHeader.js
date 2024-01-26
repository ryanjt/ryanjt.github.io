import React, { Component } from "react";

import { Text, Heading, Box, Divider } from '@chakra-ui/react'
class SectionHeader extends Component {
    render() {
        return (
            <>
                <Heading mt="10" as="h4" size='lg' color="#FAFAFF">{this.props.title}</Heading>
                <Divider mt="6" />
            </>
        )


    }
}

export default SectionHeader;