import { Box, HStack, VStack, Text, Image } from "@chakra-ui/react"
import Logo from "../../assets/img/Logo.png"


export const Footer = () => {

    return (
        <Box w="100%" h="59.5rem" bgColor="rgba(61, 204, 183, 0.16)" p="3.75rem 6.5rem">
            <VStack>
                <HStack>
                    <VStack>
                        <Image src={Logo} />
                        <Text>O jeito fácil de agendar consultas médicas</Text>
                    </VStack>
                </HStack>
                <Text>&copy; NaConsulta 2023. All rigths reserved.</Text>
            </VStack>
        </Box>
    )
}