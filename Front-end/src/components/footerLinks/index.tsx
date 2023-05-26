import { Box, Link, Text, VStack } from "@chakra-ui/react";

export const FooterLinks = () => {
  return (
    <Box display="flex" w="18.25rem" h="11.5rem" justifyContent="space-between">
      <VStack alignItems="flex-start" gap="1rem">
        <Text
          fontSize="1rem"
          lineHeight="1.25rem"
          letterSpacing="-0.05em"
          fontWeight={600}
          color="#00C3A5"
        >
          LINKS
        </Text>
        <Link
          fontSize="1rem"
          lineHeight="1.25rem"
          letterSpacing="-0.01em"
          fontWeight={500}
          color="#004238"
          cursor="pointer"
        >
          Sobre Nós
        </Link>
        <Link
          fontSize="1rem"
          lineHeight="1.25rem"
          letterSpacing="-0.01em"
          fontWeight={500}
          color="#004238"
          cursor="pointer"
        >
          Consultas
        </Link>
        <Link
          fontSize="1rem"
          lineHeight="1.25rem"
          letterSpacing="-0.01em"
          fontWeight={500}
          color="#004238"
          cursor="pointer"
        >
          Depoimentos
        </Link>
        <Link
          fontSize="1rem"
          lineHeight="1.25rem"
          letterSpacing="-0.01em"
          fontWeight={500}
          color="#004238"
          cursor="pointer"
        >
          Ajuda
        </Link>
      </VStack>

      <VStack alignItems="flex-start" gap="1rem">
        <Text
          fontSize="1rem"
          lineHeight="1.25rem"
          letterSpacing="-0.05em"
          fontWeight={600}
          color="#00C3A5"
        >
          SERVIÇOS
        </Text>
        <Link
          fontSize="1rem"
          lineHeight="1.25rem"
          letterSpacing="-0.01em"
          fontWeight={500}
          color="#004238"
          cursor="pointer"
        >
          Agendamentos
        </Link>
        <Link
          fontSize="1rem"
          lineHeight="1.25rem"
          letterSpacing="-0.01em"
          fontWeight={500}
          color="#004238"
          cursor="pointer"
        >
          Lembretes
        </Link>
      </VStack>
    </Box>
  );
};
