import { Box, Button, Flex, FormControl, Image, Text } from "@chakra-ui/react";
import Email from "../../assets/img/emailIcon.png";
import { Label } from "../formLabel";
import { FooterInput } from "../footerInput";

export const FooterForm = () => {
  return (
    <Box
      w="25.5rem"
      h="24.25rem"
      bgColor="#F7F9F9"
      borderRadius="0.625rem"
      p="1.5rem"
    >
      <Flex alignItems="center" justifyContent="space-between" mb="2.25rem">
        <Image src={Email} w="1.5rem" h="1.5rem" />
        <Text
          fontWeight={700}
          fontSize="1.25rem"
          lineHeight="1.875rem"
          color="#004238"
        >
          Entre em contato com a gente!
        </Text>
      </Flex>
      <FormControl>
        <Box mb="1rem">
          <Label name="Nome" />
          <FooterInput placeholder="Digite seu nome" />
        </Box>
        <Flex w="100%" justifyContent="space-between" mb="1rem" gap="1rem">
          <Box>
            <Label name="Email" />
            <FooterInput placeholder="exemplo@dominio.com" />
          </Box>

          <Box>
            <Label name="Seu WhatsApp" />
            <FooterInput placeholder="(00) 00000-000" />
          </Box>
        </Flex>

        <Box mb="1rem">
          <Label name="Mensagem" />
          <FooterInput placeholder="Digite sua mensagem" heigth="4.5rem" />
        </Box>

        <Button
          w="4.75rem"
          h="2rem"
          bgColor="#00C3A5"
          borderRadius="0.5rem"
          border="none"
          color="#FFF"
          fontWeight={600}
          fontSize="0.75rem"
          lineHeight="1.125rem"
          cursor="pointer"
        >
          Enviar
        </Button>
      </FormControl>
    </Box>
  );
};
