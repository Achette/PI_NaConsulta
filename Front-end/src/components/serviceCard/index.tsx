import { Box, Heading, Image, Text } from "@chakra-ui/react";
import searchIcon from "../../assets/img/search-icon.svg";

export const ServiceCard = () => {
  return (
    <Box w="24.625rem" h="11.75rem" borderRadius="0.625rem" bgColor="#F7F9f9" p="1rem">
      <Image src={searchIcon} mb="1rem" />

      <Heading
        as="h4"
        color="#004238"
        fontSize="1.5rem"
        fontWeight={600}
        lineHeight="2.25rem"
        mb="1rem"
      >
        Encontre especialistas
      </Heading>

      <Text
        color="#004238"
        fontSize="1rem"
        fontWeight={400}
        lineHeight="1.5rem"
      >
        Busque por especialistas de saúde em sua região
      </Text>
    </Box>
  );
};
