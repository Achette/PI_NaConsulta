import { Box } from "@chakra-ui/react";
import { DoctorInfo } from "../doctorInfo";
import { mock } from "../../mock";

const { doctor } = mock;
export const DoctorCard = () => {
  return (
    <Box w="68.25rem" h="18.75rem" bgColor="#F7F9F9" p="1.5rem">
      <DoctorInfo
        name={doctor.name}
        specialty={doctor.specialty}
        address={doctor.address}
        cep={doctor.cep}
        neighborhood={doctor.neighborhood}
        room={doctor.room}
        city={doctor.city}
      />
    </Box>
  );
};