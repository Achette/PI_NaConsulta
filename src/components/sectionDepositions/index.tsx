import { Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { CommentCard } from "../commentCard";

export const SectionDepositions = () => {
  return (
    <Flex justifyContent="center" p="9.25rem 0 0 8.5rem" h="38rem" id="depositions">
      <VStack>
        <Heading
          as="h2"
          fontSize="1rem"
          letterSpacing="0.05em"
          fontWeight={500}
          lineHeight="1.5rem"
          color="rgba(0, 195, 165, 1)"
          mb="1rem"
        >
          DEPOIMENTOS
        </Heading>
        <Text
          fontWeight={700}
          fontSize="2rem"
          lineHeight="3rem"
          color="#004238"
          mb="1rem"
        >
          Opniões de nossos Clientes
        </Text>
        <HStack>
          <CommentCard />
          <CommentCard />
        </HStack>
      </VStack>
    </Flex>
  );
};
