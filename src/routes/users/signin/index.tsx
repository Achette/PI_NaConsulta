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
import { UserApi } from "../../../services/user-api";
import { toast } from "react-toastify";

export const Signin = () => {
  const [newUserData, setNewUserData] = React.useState({
    username: "",
    confirmUsername: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleCreateNewUser = React.useCallback(async () => {
    const user = {
      firstName: "default",
      lastName: "default",
      gender: "default",
      email: newUserData.username,
      password: newUserData.password,
      roles: [{ id: 1 }],
    };

    try {
      await UserApi.newUser(user);

      toast.success("Usuário cadastrado com sucesso!", {
        position: "bottom-right",
        theme: "colored",
      });

      navigate("/access");
    } catch (e: any) {
      const { errors } = e.response.data;

      toast.error(`${errors[0].message}`, {
        position: "bottom-right",
        theme: "colored",
      });
    }
  }, [navigate, newUserData.password, newUserData.username]);

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
            value={newUserData.username}
            onChange={(e) =>
              setNewUserData({ ...newUserData, username: e.target.value })
            }
          />

          <Input
            type="text"
            placeholder="Confirme seu e-mail"
            w="37.5rem"
            h="3.5rem"
            bgColor="#F4F4F4"
            border="0.9px solid #004238"
            borderRadius="0.5rem"
            value={newUserData.confirmUsername}
            onChange={(e) =>
              setNewUserData({
                ...newUserData,
                confirmUsername: e.target.value,
              })
            }
          />

          <Input
            type="password"
            placeholder="Senha"
            w="37.5rem"
            h="3.5rem"
            bgColor="#F4F4F4"
            border="0.9px solid #004238"
            borderRadius="0.5rem"
            value={newUserData.password}
            onChange={(e) =>
              setNewUserData({ ...newUserData, password: e.target.value })
            }
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
            onClick={() => handleCreateNewUser()}
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
