import imgDocs from "../../assets/img/img-doctors.svg";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

export const SectionHome = () => {
  return (
    <Flex
      w="100%"
      h="27.5rem"
      bgColor="#3DCCB7"
      alignItems="center"
      justifyContent="center"
      mt="7.5rem"
      id="home"
    >
      <Flex mt="5rem" w="100%" justifyContent="center" p="0 10rem">
        <Box w="100%">
          <Heading
            as="h2"
            color="#FFF"
            fontSize="2.5rem"
            lineHeight="3.8rem"
            pl="1.5rem"
          >
            Procure por um especialista
          </Heading>
          <Text
            color="rgba(255, 255, 255, 0.8)"
            fontSize="1.5rem"
            lineHeight="2.3rem"
            pl="1.5rem"
          >
            Um jeito fácil de agendar consultas médicas
          </Text>
          <Flex
            p="1.5rem"
            bgColor="#47C4AB"
            w="max-content"
            mt="1.5rem"
            borderRadius="0.5rem"
          >
            <Input
              h="3.75rem"
              w="20rem"
              borderRadius="0.5rem"
              border="none"
              placeholder="Médico, Serviço, Especialidade"
              mr="1rem"
              _placeholder={{
                color: "rgba(0, 0, 0, 0.3)",
                pl: "1rem",
                lineHeight: "1.5rem",
                fontSize: "1rem",
              }}
            />

            <Input
              h="3.75rem"
              w="20rem"
              borderRadius="0.5rem"
              border="none"
              placeholder="Local ex. São Paulo"
              mr="1rem"
              _placeholder={{
                color: "rgba(0, 0, 0, 0.3)",
                pl: "1rem",
                lineHeight: "1.5rem",
                fontSize: "1rem",
              }}
            />
            <Button
              w="9.25rem"
              bgColor="#004238"
              h="3.75rem"
              borderRadius="0.5rem"
              color="#FFF"
              border="none"
              fontWeight={500}
              fontSize="1.25rem"
              cursor="pointer"
            >
              Pesquisar
            </Button>
          </Flex>
        </Box>
        <Image alignContent="end" src={imgDocs} />
      </Flex>
    </Flex>
  );
};
