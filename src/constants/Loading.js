import { Container, Center, Image } from '@chakra-ui/react'
import logo from "../assets/logo-branca.png"
import React from 'react'


export default function HomePage() {

    return (
        <Container w={"100vw"} h={"100vh"} bg={"#e86e5a"}>
            <Center>
                <Image src={logo} w={'126px'} h={"65px"} marginTop={'calc(50vh - 32.5px)'}/>
            </Center>
        </Container>
    )
}