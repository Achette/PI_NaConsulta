import { Flex } from "@chakra-ui/react";
import { AppointmentCard, AppointmentInfo } from "../../../components";

export const Appointment = () => {
  return (
    <Flex>
      <AppointmentInfo />
      <AppointmentCard />
    </Flex>
  );
};
