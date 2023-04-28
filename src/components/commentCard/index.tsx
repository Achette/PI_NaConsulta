import { Flex, Image, Text } from "@chakra-ui/react";
import Aspas from "../../assets/img/Aspas.svg";
import Avatar from "../../assets/img/avatar.png";

export const CommentCard = () => {
    
  return (
    <Flex
      flexDirection="column"
      w="34rem"
      h="17.125rem"
      p="2rem"
      gap="1.25rem"
      bgColor="#F7F9F9"
      borderRadius="0.25rem"
    >
      <Image src={Aspas} w="2.75rem" h="2rem" />
      <Text bgColor="#F7F9F9">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        velit voluptates maxime molestias aperiam deserunt iste, quod officia,
        quaerat dicta quae corrupti repellendus, repellat explicabo alias
        mollitia. Voluptatum, accusamus non.
      </Text>

      <Flex alignItems="center" gap="1rem">
        <Image src={Avatar} />
        <Text
          color="#004238"
          fontSize="1rem"
          fontWeight={700}
          lineHeight="1.75rem"
        >
          Wanessa Souza
        </Text>
      </Flex>
    </Flex>
  );
};
