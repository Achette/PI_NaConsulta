import { Flex } from "@chakra-ui/react";
import { AppointmentCard, AppointmentInfo } from "../../../components";

export const Appointment = () => {
  return (
    <Flex w="75.75rem" justifyContent="space-between">
      <AppointmentInfo />
      <AppointmentCard />
    </Flex>
  );
};
