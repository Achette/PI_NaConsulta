import { Box, HStack, VStack, Text, Image, Link } from "@chakra-ui/react";
import { FooterForm } from "../footerForm";
import Logo from "../../assets/img/Logo.png";
import Facebook from "../../assets/img/Facebook.png";
import Instagram from "../../assets/img/Instagram.png";
import Twitter from "../../assets/img/Twitter.png";
import LinkedIn from "../../assets/img/LinkedIn.png";

export const Footer = () => {
  return (
    <Box
      w="100%"
      h="59.5rem"
      bgColor="rgba(61, 204, 183, 0.16)"
      p="3.75rem 6.5rem"
    >
      <VStack w="100%" h="100%" justifyContent="center" alignItems="center">
        <HStack w="100%" justifyContent="space-between">
          <VStack w="21.55rem" h="10.75rem" justifyContent="space-between">
            <Image src={Logo} />
            <Text
              fontSize="1rem"
              lineHeight="1.875rem"
              fontWeight={500}
              letterSpacing="-0.01em"
              color="#004238"
            >
              O jeito fácil de agendar consultas médicas
            </Text>
            <HStack w="70%" justifyContent="space-evenly">
              <Image src={Facebook} />
              <Image src={Instagram} />
              <Image src={Twitter} />
              <Image src={LinkedIn} />
            </HStack>
          </VStack>

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

          <FooterForm />
        </HStack>
        <Text>&copy; NaConsulta 2023. All rigths reserved.</Text>
      </VStack>
    </Box>
  );
};
