import { FormLabel, Heading, Radio, RadioGroup, Stack, VStack } from "@chakra-ui/react";
import { AppointmentInput } from "../appointmentInput";
import { AppointmentInputRadio } from "../appointmentRadio";

export const AppointmentInfo = () => {
  return (
    <VStack
      w="37.5rem"
      h="35.5rem"
      border="1px solid red"
      alignItems="flex-start"
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

      <AppointmentInputRadio />
    </VStack>
  );
};
