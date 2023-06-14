import {
  Box,
  Flex,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"
import { MdPlayCircle } from "react-icons/md"
import { useNavigate } from "react-router-dom"

export const DoctorSchedule = () => {
  const navigate = useNavigate()

  const handleContinueAppointment = () => {
    navigate("/Schedule")
  }
  return (
    //w="29.77rem" h="13.125rem"
    <Box w="100%" mt="14px">
      <Flex flexDirection="row" justifyContent="space-between">
        <Icon as={MdPlayCircle} transform="rotate(180deg)"></Icon>
        <Icon as={MdPlayCircle}></Icon>
      </Flex>
      <TableContainer
        w="100%"
        h="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt="-25px"
      >
        <Table w="100%" h="100%" variant="simple">
          <Thead>
            <Tr w="100%">
              <Th>Hoje</Th>
              <Th>Amanhã</Th>
              <Th>Sexta</Th>
              <Th>Sábado</Th>
            </Tr>
          </Thead>
          <Tbody w="100%">
            <Tr w="100%">
              <Td textAlign="center">12 Abr</Td>
              <Td textAlign="center">13 Abr</Td>
              <Td textAlign="center">14 Abr</Td>
              <Td textAlign="center">15 Abr</Td>
            </Tr>
            <Tr w="100%">
              <Td textAlign="center">-</Td>
              <Td
                onClick={() => handleContinueAppointment()}
                cursor="pointer"
                textAlign="center"
              >
                10:00
              </Td>
              <Td textAlign="center">-</Td>
              <Td textAlign="center">-</Td>
            </Tr>
            <Tr>
              <Td textAlign="center">-</Td>
              <Td
                onClick={() => handleContinueAppointment()}
                cursor="pointer"
                textAlign="center"
              >
                12:00
              </Td>
              <Td textAlign="center">-</Td>
              <Td textAlign="center">-</Td>
            </Tr>
            <Tr>
              <Td textAlign="center">-</Td>
              <Td
                onClick={() => handleContinueAppointment()}
                cursor="pointer"
                textAlign="center"
              >
                13:00
              </Td>
              <Td textAlign="center">-</Td>
              <Td textAlign="center">-</Td>
            </Tr>
            <Tr>
              <Td textAlign="center">-</Td>
              <Td
                onClick={() => handleContinueAppointment()}
                cursor="pointer"
                textAlign="center"
              >
                15:00
              </Td>
              <Td textAlign="center">-</Td>
              <Td textAlign="center">-</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}
