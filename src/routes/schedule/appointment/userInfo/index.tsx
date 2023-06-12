import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Link,
  Text,
  Textarea,
} from "@chakra-ui/react";
import {
  AppointmentInput,
  AppointmentInputRadio,
} from "../../../../components";

export const UserInfo = () => {
  return (
    <Flex
      w="37.5rem"
      h="56rem"
      justifyContent="space-between"
      flexDirection="column"
    >
      <Heading
        as="h2"
        color="#004238"
        fontSize="2rem"
        fontWeight={600}
        lineHeight="3rem"
      >
        Marcar Consulta
      </Heading>

      <Box>
        <AppointmentInput label="Informações pessoais *" placeholder="Nome *" />
        <AppointmentInput placeholder="Sobrenome *" />
      </Box>

      <Box>
        <AppointmentInput
          label="Informações de contato *"
          placeholder="Número de celular *"
        />
        <Text color="#4b4b4b" fontSize="0.8rem">
          ex.: 12 99999 9999
        </Text>
        <AppointmentInput type="email" placeholder="E-mail" />
        <Text color="#4b4b4b" fontSize="0.8rem">
          Enviaremos uma mensagem de confirmação e um lembrete antes da
          consulta.
        </Text>
      </Box>

      <AppointmentInputRadio
        label="Você tem sintomas de COVID ou teve contato com alguém com sintomas?"
        name="covid"
        value1="sim"
        value2="não"
      />

      <Box>
        <Text color="#004238" fontSize="1rem" lineHeight="1.5rem">
          Informações Adicionais (opcional)
        </Text>
        <Textarea
          h="5.5rem"
          w="100%"
          border="0.9px solid #4B4B4B"
          borderRadius="0.5rem"
          bgColor="#F4F4F4"
          placeholder="Qualquer informação adicional que você gostaria de compartilhar com o doutor antes da consulta."
        />
      </Box>

      <Flex alignItems="flex-start" justifyContent="center">
        <input type="checkbox" id="checkbox" />
        <FormLabel
          ml="0.5rem"
          color="#004238"
          fontSize="1rem"
          lineHeight="1.5rem"
        >
          * Entendo que meus dados pessoais relativos à saúde serão tratados e
          transferidos para o especialista com o propósito de fazer o
          agendamento.
        </FormLabel>
      </Flex>

      <Box>
        <Text
          fontSize="0.75rem"
          lineHeight="1.125rem"
          color="#004238"
          mb="0.5rem"
        >
          Ao criar uma conta de usuário, você aceita os{" "}
          <Link textDecoration="underline">termos e condições</Link> de uso da
          NaConsulta e reconhece que leu e entendeu nossa{" "}
          <Link textDecoration="underline">política de privacidade</Link> .
        </Text>
        <Button
          w="100%"
          h="3.5rem"
          bgColor="#004238"
          borderRadius="0.5rem"
          color="#FFF"
          fontWeight={500}
          fontSize="1rem"
          lineHeight="1.5rem"
        >
          Marcar Consulta
        </Button>

        <Box w="100%">
          <Text color="#004238" textAlign="center">
            * Campo obrigatório
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};
