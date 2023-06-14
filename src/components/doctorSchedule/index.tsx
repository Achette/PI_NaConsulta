import {
  Box,
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

export const DoctorSchedule = () => {
  return (
    <Box w="29.77rem" h="13.125rem" border="1px solid red">
      <Icon as={MdPlayCircle} transform="rotate(180deg)"></Icon>
      <Icon as={MdPlayCircle}></Icon>
      <TableContainer
        w="100%"
        h="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Table w="100%" h="100%" variant="simple" border="1px solid blue">
          <Thead>
            <Tr
              w="100%"
              border="1px solid orange"
              display="flex"
              justifyContent="space-evenly"
            >
              <Th>Hoje</Th>
              <Th>Amanhã</Th>
              <Th>Sexta</Th>
              <Th>Sábado</Th>
            </Tr>
          </Thead>
          <Tbody w="100%" border="1px solid green">
            <Tr
              w="100%"
              border="1px solid orange"
              display="flex"
              justifyContent="space-evenly"
            >
              <Td>12 Abr</Td>
              <Td>13 Abr</Td>
              <Td>14 Abr</Td>
              <Td>15 Abr</Td>
            </Tr>
            <Tr>
              <Td>-</Td>
              <Td>10:00</Td>
              <Td>-</Td>
              <Td>-</Td>
            </Tr>
            <Tr>
              <Td>-</Td>
              <Td>12:00</Td>
              <Td>-</Td>
              <Td>-</Td>
            </Tr>
            <Tr>
              <Td>-</Td>
              <Td>13:00</Td>
              <Td>-</Td>
              <Td>-</Td>
            </Tr>
            <Tr>
              <Td>-</Td>
              <Td>15:00</Td>
              <Td>-</Td>
              <Td>-</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}
