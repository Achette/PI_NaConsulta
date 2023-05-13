import { Box, Link, Text, VStack } from "@chakra-ui/react";

export const FooterLinks = () => {
  return (
    <Box
      display="flex"
      w="18.25rem"
      h="11.5rem"
      justifyContent="space-between"
      border="1px solid red"
    >
      <VStack>
        <Text>LINKS</Text>
        <Link>Sobre Nós</Link>
        <Link>Consultas</Link>
        <Link>Depoimentos</Link>
        <Link>Ajuda</Link>
      </VStack>
      <VStack>
        <Text>SERVIÇOS</Text>
        <Link>Agendamentos</Link>
        <Link>Lembretes</Link>
      </VStack>
    </Box>
  );
};
