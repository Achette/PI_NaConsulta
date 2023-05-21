import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AppleButton, FacebookButton, GoogleButton } from "../../../components";

export const Signin = () => {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate("/access");
  };
  return (
    <Box w="100%" h="100%" mb="2rem">
      <Box w="37.5rem" margin="0 auto">
        <Heading
          as="h1"
          color="#004238"
          fontWeight={600}
          fontSize="2.5rem"
          lineHeight="3.75rem"
          mb="1.5rem"
        >
          Crie uma conta
        </Heading>
        <VStack h="100%" gap="1.5rem">
          <GoogleButton />
          <FacebookButton />
          <AppleButton />

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

          <Input
            type="text"
            placeholder="Digite seu e-mail"
            w="37.5rem"
            h="3.5rem"
            bgColor="#F4F4F4"
            border="0.9px solid #004238"
            borderRadius="0.5rem"
          />

          <Input
            type="text"
            placeholder="Confirme seu e-mail"
            w="37.5rem"
            h="3.5rem"
            bgColor="#F4F4F4"
            border="0.9px solid #004238"
            borderRadius="0.5rem"
          />

          <Input
            type="password"
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
            Cadastrar
          </Button>

          <Text
            m="2.5rem 0"
            color="#004238"
            fontWeight={300}
            fontSize="1rem"
            lineHeight="1.5rem"
          >
            Ao criar uma conta de usuário, você aceita os{" "}
            <Link fontWeight={700} cursor="pointer">
              termos e condições
            </Link>{" "}
            de uso da NaConsulta e reconhece que leu e entendeu nossa política
            de privacidade
          </Text>

          <Divider
            w="37.5rem"
            h="0.05625rem"
            bg="rgba(0, 0, 0, 0.5)"
            mt="2.5rem"
          />

          <Text
            m="2.5rem 0"
            color="#004238"
            fontWeight={300}
            fontSize="1rem"
            lineHeight="1.5rem"
          >
            Já possui uma conta?{" "}
            <Link
              fontWeight={700}
              cursor="pointer"
              onClick={() => handleGoToLogin()}
            >
              Faça login!
            </Link>
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};
