import { Divider, Flex, Image } from "@chakra-ui/react";
import Logo from "../../assets/img/Logo_light_green.png";
import { Outlet } from "react-router-dom";

export const UserAccess = () => {
  return (
    <Flex flexDir="column" alignItems="center" maxH="100vh" w="100%" mt="1rem">
      <Image src={Logo} w="20.625rem" h="4.5rem" mb="1rem" />
      <Divider w="65%" h="0.05625rem" bg="rgba(0, 0, 0, 0.5)" mb="2.5rem" />
      <Outlet />
    </Flex>
  );
};
