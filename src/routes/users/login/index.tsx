import { Box, Button, Heading, Input, VStack } from "@chakra-ui/react";

export const Login = () => {
  return (
    <Box border="1px solid red" w="100%" p="0 14.375rem">
      <Heading
        as="h1"
        color="#004238"
        fontWeight={600}
        fontSize="2.5rem"
        lineHeight="3.75rem"
      >
        Faça login na sua conta
      </Heading>
      <VStack>
        <Input
          type="text"
          placeholder="E-mail"
          w="37.5rem"
          h="3.5rem"
          bgColor="#F4F4F4"
          border="0.9px solid #004238"
          borderRadius="0.5rem"
        />

        <Input
          type="text"
          placeholder="Senha"
          w="37.5rem"
          h="3.5rem"
          bgColor="#F4F4F4"
          border="0.9px solid #004238"
          borderRadius="0.5rem"
        />

        <Button
          w="37.5rem"
          h="3.5rem"
          bgColor="#004238"
          borderRadius="0.5rem"
          color="#FFF"
          fontSize="1rem"
          fontWeight={500}
          lineHeight="1.5rem"
          cursor="pointer"
        >
          Entrar
        </Button>
      </VStack>
    </Box>
  );
};
