import { Box, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import imgDocs from "../../assets/img/img-doctors.svg";

export const SectionHome = () => {
  return (
    <Flex
      h="27.5rem"
      bgColor="#3DCCB7"
      alignItems="center"
      justifyContent="center"
    >
      <Flex mt="5rem">
        <Box>
          <Heading as="h2" color="#FFF" fontSize="2.5rem" lineHeight="3.8rem">
            Procure por um especialista
          </Heading>
          <Text
            color="rgba(255, 255, 255, 0.8)"
            fontSize="1.5rem"
            lineHeight="2.3rem"
          >
            Um jeito fácil de agendar consultas médicas
          </Text>
          <Flex>
            <Input
              h="3.75rem"
              w="23.625rem"
              borderRadius="0.5rem"
              border="none"
              placeholder="Médico, Serviço, Especialidade"
            />

            <Input
              h="3.75rem"
              w="23.625rem"
              borderRadius="0.5rem"
              border="none"
              placeholder="Local ex. São Paulo"
            />
          </Flex>
        </Box>
        <Image zIndex="1" src={imgDocs} />
      </Flex>
    </Flex>
  );
};
