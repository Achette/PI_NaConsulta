import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import imgDocs from "../../assets/img/img-doctors.svg"

export const SectionHome = () => {
  return (
    <Flex h="27.5rem" bgColor="#3DCCB7">
      <Box>
        <Heading as="h2" color="#FFF" fontSize="2.5rem" lineHeight="3.8rem">
          Procure por um especialista
        </Heading>
        <Text color="rgba(255, 255, 255, 0.8)" fontSize="1.5rem" lineHeight="2.3rem">
          Um jeito fácil de agendar consultas médicas
        </Text>
        <Image src={imgDocs} />
      </Box>
    </Flex>
  );
};
