import { Image, Flex, Link, Button, Box } from "@chakra-ui/react";
import Logo from "../../assets/img/Logo.svg";

export const Header = () => {
  return (
    <Flex
      w="100%"
      h="7.5rem"
      bgColor="#3DCCB7"
      color="#FFF"
      justifyContent="space-evenly"
      alignItems="center"
      position="fixed"
      zIndex="1"
      top="0"
    >
      <Image w="20.625rem" h="4.5rem" src={Logo} />

      <Flex
        fontSize="1.25rem"
        lineHeight="2.25rem"
        fontWeight={400}
        w="34.625rem"
        justifyContent="space-between"
      >
        <Link>Início</Link>
        <Link>Sobre</Link>
        <Link>Depoimentos</Link>
        <Link>Fale Conosco</Link>
      </Flex>

      <Button
        w="12.25rem"
        h="2.625rem"
        borderRadius="2.5rem"
        color="#FFF"
        border="1px solid #FFF"
        bgColor="#3DCCB7"
        fontSize="0.875rem"
      >
        AGENDAR CONSULTA
      </Button>
    </Flex>
  );
};
