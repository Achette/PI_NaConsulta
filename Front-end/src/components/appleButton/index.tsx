import { Image } from "@chakra-ui/image";
import { Flex, Link, Text, VStack } from "@chakra-ui/layout";
import AppleIcon from "../../assets/img/appleIcon.png";

export const AppleButton = () => {
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
          <Image src={AppleIcon} alignSelf="flex-start" pl="1rem" />
          <Text margin="0 auto" fontSize="1rem" fontWeight={400} color="#000">
            Continuar com Apple
          </Text>
        </Flex>
      </VStack>
    </Link>
  );
};
