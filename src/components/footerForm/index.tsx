import { Box, Flex, FormControl, Image, Text } from "@chakra-ui/react";
import Email from "../../assets/img/emailIcon.png";

export const FooterForm = () => {
  return (
    <Box
      w="25.5rem"
      h="24.25rem"
      bgColor="#F7F9F9"
      borderRadius="0.625rem"
      p="1.5rem"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Image src={Email} w="1.5rem" h="1.5rem" />
        <Text
          fontWeight={700}
          fontSize="1.25rem"
          lineHeight="1.875rem"
          color="#004238"
        >
          Entre em contato com a gente!
        </Text>
      </Flex>
      <FormControl></FormControl>
    </Box>
  );
};
