import { Flex } from "@chakra-ui/react"
import { DoctorInfo } from "../doctorInfo"
import { mock } from "../../mock"
import { DoctorSchedule } from "../doctorSchedule"

const { doctor } = mock
export const DoctorCard = () => {
  return (
    <Flex w="68.25rem" h="18.75rem" bgColor="#F7F9F9" p="1.5rem" mb="0.5rem">
      <Flex flex={1}>
        <DoctorInfo
          name={doctor.name}
          specialty={doctor.specialty}
          address={doctor.address}
          cep={doctor.cep}
          neighborhood={doctor.neighborhood}
          room={doctor.room}
          city={doctor.city}
        />
      </Flex>
      <Flex flex={1}>
        <DoctorSchedule />
      </Flex>
    </Flex>
  )
}
