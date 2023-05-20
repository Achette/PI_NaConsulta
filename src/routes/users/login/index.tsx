import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AppleButton, FacebookButton, GoogleButton } from "../../../components";

export const Login = () => {
  return (
    <Box w="100%" h="100%">
      <Box w="37.5rem" margin="0 auto">
        <Heading
          as="h1"
          color="#004238"
          fontWeight={600}
          fontSize="2.5rem"
          lineHeight="3.75rem"
          mb="1.5rem"
        >
          Faça login na sua conta
        </Heading>
        <VStack h="100%" gap="1.5rem">
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

          <Text mb="2.5rem">Esqueceu a sua senha?</Text>

          <Flex align="center" w="100%" justifyContent="space-between">
            <Divider w="12.75rem" h="0.05625rem" bg="rgba(0, 0, 0, 0.5)" />
            <Text
              color="#004238"
              fontSize="1rem"
              lineHeight="1.5rem"
              fontWeight={400}
            >
              ou
            </Text>
            <Divider w="12.75rem" h="0.05625rem" bg="rgba(0, 0, 0, 0.5)" />
          </Flex>
          <GoogleButton />
          <FacebookButton />
          <AppleButton />
        </VStack>
      </Box>
    </Box>
  );
};
