import { Flex, HStack, Heading } from "@chakra-ui/react";
import { ServiceCard } from "../serviceCard";

export const SectionServices = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      p="7.75rem 0"
    >
      <Flex flexDirection="column" alignItems="center">
        <Heading
          as="h2"
          fontSize="1rem"
          letterSpacing="0.05em"
          fontWeight={500}
          lineHeight="1.5rem"
          color="rgba(0, 195, 165, 1)"
          mb="1rem"
        >
          SERVIÇOS
        </Heading>
        <Heading
          as="h3"
          fontWeight={700}
          fontSize="2rem"
          lineHeight="3rem"
          color="#004238"
          mb="1rem"
        >
          Nossas soluções para você
        </Heading>
      </Flex>
      <HStack>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </HStack>
    </Flex>
  );
};
