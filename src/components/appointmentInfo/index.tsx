import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { AppointmentInput } from "../appointmentInput";
import { AppointmentInputRadio } from "../appointmentRadio";
import { useNavigate } from "react-router-dom";

export const AppointmentInfo = () => {
  const navigate = useNavigate();

  const handleContinueAppointment = () => {
    navigate("/schedule/userinfo");
  };
  return (
    <VStack
      w="37.5rem"
      h="35.5rem"
      alignItems="flex-start"
      justifyContent="space-between"
    >
      <Heading
        as="h2"
        color="#004238"
        fontSize="2rem"
        fontWeight={600}
        lineHeight="3rem"
      >
        Opções da Consulta
      </Heading>

      <AppointmentInput
        label="Tipo de consulta *"
        value="Consulta Psiquiátrica"
      />
      <AppointmentInput label="Valor *" value="R$ 500,00" />

      <AppointmentInput
        label="Convênio Médico *"
        value="Este especialista não aceita convênio médico"
      />

      <AppointmentInputRadio
        label="É sua primeira consulta com este especialista? *"
        name="option"
        value1="sim"
        value2="não"
      />

      <Button
        w="100%"
        h="3.5rem"
        bgColor="#004238"
        borderRadius="0.5rem"
        color="#FFF"
        fontWeight={500}
        fontSize="1rem"
        lineHeight="1.5rem"
        onClick={() => handleContinueAppointment()}
      >
        Continuar
      </Button>

      <Box w="100%">
        <Text color="#004238" textAlign="center">
          * Campo obrigatório
        </Text>
      </Box>
    </VStack>
  );
};
