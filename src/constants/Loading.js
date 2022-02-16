import { Container, Center, Image } from '@chakra-ui/react'
import logo from "../../assets/logo-branca.png"


export default function HomePage() {

    return (
        <Container w={"100vw"} h={"100vh"} bg={"#e86e5a"}>
            <Center>
                <Image src={logo}/>
            </Center>
        </Container>
    )
}