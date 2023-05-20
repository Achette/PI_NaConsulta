import { Divider, Flex, Image, Link, Text } from "@chakra-ui/react";
import Logo from "../../assets/img/Logo_light_green.png";
import { Outlet } from "react-router-dom";

export const UserAccess = () => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      minH="100vh"
      w="100%"
      mt="1rem"
      p="0 14.125rem"
    >
      <Image src={Logo} w="20.625rem" h="4.5rem" mb="1rem" />
      <Divider w="100%" h="0.05625rem" bg="rgba(0, 0, 0, 0.5)" mb="2.5rem" />
      <Outlet />
      <Divider w="37.5rem" h="0.05625rem" bg="rgba(0, 0, 0, 0.5)" mt="2.5rem" />
      <Text m="2.5rem 0" color="#004238" fontWeight={300} fontSize="1rem" lineHeight="1.5rem">
        Ainda não tem conta?{" "}
        <Link fontWeight={700} cursor="pointer">
          Faça seu cadastro!
        </Link>
      </Text>
    </Flex>
  );
};
