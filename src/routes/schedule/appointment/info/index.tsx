import { Flex } from "@chakra-ui/react";
import { AppointmentCard, AppointmentInfo } from "../../../../components";

export const Info = () => {
  return (
    <Flex w="100%" justifyContent="space-between">
      <AppointmentInfo />
    </Flex>
  );
};
