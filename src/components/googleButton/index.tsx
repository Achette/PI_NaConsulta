import { Flex, Image, Link, Text, VStack } from "@chakra-ui/react";
import GoogleIcon from "../../assets/img/googleIcon.png";

export const GoogleButton = () => {
  return (
    <Link>
      <VStack
        justifyContent="center"
        w="37.5rem"
        h="3.375rem"
        bgColor="#FFF"
        border="0.9px solid #000000"
        borderRadius="0.125rem"
      >
        <Flex w="100%">
          <Image src={GoogleIcon} alignSelf="flex-start" pl="1rem" />
          <Text margin="0 auto" fontSize="1rem" fontWeight={400} color="#000">
            Continuar com Google
          </Text>
        </Flex>
      </VStack>
    </Link>
  );
};
