import { Flex } from "@chakra-ui/react";
import { AppointmentInfo } from "../../../../components";

export const Info = () => {
  return (
    <Flex w="37.5rem" justifyContent="space-between">
      <AppointmentInfo />
    </Flex>
  );
};
