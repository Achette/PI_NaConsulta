import { Image } from "@chakra-ui/image";
import { Flex, Link, Text, VStack } from "@chakra-ui/layout";
import FacebookIcon from "../../assets/img/facebookIcon.png";

export const FacebookButton = () => {
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
          <Image src={FacebookIcon} alignSelf="flex-start" pl="1rem" />
          <Text margin="0 auto" fontSize="1rem" fontWeight={400} color="#000">
            Continuar com Facebook
          </Text>
        </Flex>
      </VStack>
    </Link>
  );
};
