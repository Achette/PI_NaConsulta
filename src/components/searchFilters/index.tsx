import { Box, FormControl, HStack, Icon, Text } from "@chakra-ui/react"
import {
  MdCreditCard,
  MdFilterListAlt,
  MdLocationOn,
  MdOutlineCalendarMonth,
  MdVideoCameraFront,
} from "react-icons/md"
import { mock } from "../../mock"

export const SearchFilters = () => {
  const { specialty, city } = mock.doctor

  return (
    <Box>
      <Box
        m="8.5rem 0 0 "
        w="68.25rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <FormControl
          w="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack backgroundColor="#F7F9F9" borderRadius="0.5rem" p="0 0.5rem">
            <Icon color="#004238" as={MdVideoCameraFront}></Icon>
            <select placeholder="Telemedicina">
              <option value="value1">Telemedicina</option>
              <option value="value2">Opção 2</option>
              <option value="value3">Opção 3</option>
            </select>
          </HStack>
          <HStack backgroundColor="#F7F9F9" borderRadius="0.5rem" p="0 0.5rem">
            <Icon color="#004238" as={MdCreditCard}></Icon>
            <select placeholder="Convênios">
              <option value="value1">Convênios</option>
              <option value="value2">Opção 2</option>
              <option value="value3">Opção 3</option>
            </select>
          </HStack>
          <HStack backgroundColor="#F7F9F9" borderRadius="0.5rem" p="0 0.5rem">
            <Icon color="#004238" as={MdOutlineCalendarMonth}></Icon>
            <select placeholder="Datas disponíveis">
              <option value="value1">Datas disponíveis</option>
              <option value="value2">Opção 2</option>
              <option value="value3">Opção 3</option>
            </select>
          </HStack>
          <HStack backgroundColor="#F7F9F9" borderRadius="0.5rem" p="0 0.5rem">
            <Icon color="#004238" as={MdLocationOn}></Icon>
            <select placeholder="Bairros">
              <option value="value1">Bairros</option>
              <option value="value2">Opção 2</option>
              <option value="value3">Opção 3</option>
            </select>
          </HStack>
          <HStack
            color="#004238"
            backgroundColor="#F7F9F9"
            borderRadius="0.5rem"
            p="0 0.5rem"
          >
            <Icon as={MdFilterListAlt}></Icon>
            <select placeholder="Outros filtros">
              <option>Outros filtros</option>
              <option>Nigeria</option>
            </select>
          </HStack>
        </FormControl>
      </Box>
      <Box color="#004238" fontWeight="500" mt="1rem">
        <Text fontSize="2rem" textAlign="start">
          {specialty}
        </Text>
        <Text fontSize="1rem">{city}</Text>
      </Box>
    </Box>
  )
}
