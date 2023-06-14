import React from "react";
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
import * as authService from "../../../services/auth-service";
import { toast } from "react-toastify";

export const Login = () => {
  const [user, setUser] = React.useState({ username: "", password: "" });

  const navigate = useNavigate();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    authService
      .loginRequest(user)
      .then((res) => {
        toast.success(`Bem vindo ${user.username}`, {
          position: "bottom-right",
          theme: "colored",
        });

        navigate("/search");
      })
      .catch((e) => {
        toast.error("Usuário ou senha incorretos. Tente novamente!", {
          position: "bottom-right",
          theme: "colored",
        });
      });
  };

  const handleGoToSignin = () => {
    navigate("/access/signin");
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
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />

          <Input
            type="password"
            placeholder="Senha"
            w="37.5rem"
            h="3.5rem"
            bgColor="#F4F4F4"
            border="0.9px solid #004238"
            borderRadius="0.5rem"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
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
            onClick={(e) => handleSubmit(e)}
          >
            Entrar
          </Button>

          <Text mb="2.5rem" color="#004238">
            Esqueceu a sua senha?
          </Text>

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
            Ainda não tem conta?{" "}
            <Link
              fontWeight={700}
              cursor="pointer"
              onClick={() => handleGoToSignin()}
            >
              Faça seu cadastro!
            </Link>
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};
