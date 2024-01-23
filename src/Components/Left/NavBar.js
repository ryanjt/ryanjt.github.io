import { Component } from "react";
import { Stack, Text, Link, Box } from '@chakra-ui/react'
class NavBar extends Component {
    render() {
        return (
            <>
                <Box m="10">
                    <nav className="nav" >
                        <Stack>
                            <Link>About</Link>
                            <Link>Experience</Link>
                            <Link>Projects</Link>
                        </Stack>

                    </nav>
                </Box>


            </>
        )


    }
}

export default NavBar;