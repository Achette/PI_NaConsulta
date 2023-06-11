import { Flex } from "@chakra-ui/react";
import { AppointmentCard } from "../../../components";
import { Outlet } from "react-router-dom";

export const Appointment = () => {
  return (
    <Flex w="75.75rem" justifyContent="space-between">
      <Outlet />
      <AppointmentCard />
    </Flex>
  );
};
