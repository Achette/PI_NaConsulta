import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react"
import { AppointmentCard } from "../../../../components"
import Logo from "../../../../assets/img/Logo_light_green.png"
import { useNavigate } from "react-router-dom";

export const CompletedInfo = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/schedule/userinfo");
  };
  
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      minH="115vh"
      w="100%"
      mt="1rem"
      p="0 14.125rem"
    >
      <Image src={Logo} w="20.625rem" h="4.5rem" mb="1rem" />
      <Divider w="100%" h="0.05625rem" bg="rgba(0, 0, 0, 0.5)" mb="2.5rem" />
      <Box>
        <Text mb="2.5rem" color="#004238" fontSize="2rem" fontWeight={600}>
          Consulta agendada com sucesso!
        </Text>
        <AppointmentCard />
        <Button
          w="100%"
          backgroundColor="#004238"
          p="1rem"
          mt="2.5rem"
          borderRadius="0.5rem"
          color="#ffffff"
          fontSize="1rem"
          fontWeight={500}
          onClick={() => handleNavigate()}
        >
          Voltar
        </Button>
      </Box>
    </Flex>
  )
}
