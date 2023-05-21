import { Image, Flex, Link, Button } from "@chakra-ui/react";
import Logo from "../../assets/img/Logo.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/access");
  };

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
        <Link href="#home" color="#FFF">
          Início
        </Link>
        <Link href="#aboutUs" color="#FFF">
          Sobre
        </Link>
        <Link href="#depositions" color="#FFF">
          Depoimentos
        </Link>
        <Link href="#talkToUs" color="#FFF">
          Fale Conosco
        </Link>
      </Flex>

      <Button
        w="12.25rem"
        h="2.625rem"
        borderRadius="2.5rem"
        color="#FFF"
        border="1px solid #FFF"
        bgColor="#3DCCB7"
        fontSize="0.875rem"
        cursor="pointer"
        _hover={{ bg: "#FFF", color: "#3DCCB7", fontWeight: "600" }}
        onClick={() => handleNavigate()}
      >
        AGENDAR CONSULTA
      </Button>
    </Flex>
  );
};
