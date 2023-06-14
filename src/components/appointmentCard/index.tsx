import {
    Box,
    Flex,
    Icon,
    Image,
    VStack,
    Text,
    Link,
} from "@chakra-ui/react";
import { MdCalendarMonth, MdLocationOn, MdVerified } from "react-icons/md";
import Img from "../../assets/img/IconDoc.svg";
import { mock } from "../../mock";

export const AppointmentCard = () => {
  const { name, room, specialty, city, address, cep, neighborhood } =
    mock.doctor;
  const { day, dayOfWeek, hour, UTM } = mock.doctor.schedule;

  return (
    <VStack
      color="#004238"
      w="34.7rem"
      h="26.25rem"
      alignItems="flex-start"
      justifyContent="space-between"
      backgroundColor="#F7F9F9"
      padding="1.5rem"
    >
      <Flex justifyContent="center" alignItems="center">
        <Image src={Img} alt="Perfil Photo" />
        <Box display="flex" flexDirection="column" ml="0.8rem">
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="1.5rem" fontWeight="400" mb="0.25rem">
              {name}
            </Text>
            <Icon as={MdVerified} ml="0.3rem" color="#00C3A5"></Icon>
          </Flex>
          <Text fontSize="1.5rem" fontWeight="400">
            {specialty}
          </Text>
        </Box>
      </Flex>
      <VStack fontSize="1rem" fontWeight="400" lineHeight="1rem">
        <Flex>
          <Icon as={MdCalendarMonth} mt="0.2rem" mr="1rem"></Icon>
          <VStack alignItems="flex-start">
            <Text>
              {day}, {hour}
            </Text>
            <Text>{dayOfWeek}</Text>
            <Text>Fuso horário: {UTM}</Text>
            <Link color="#004238" fontWeight={700} href={`#`}>
              Mudar horário
            </Link>
          </VStack>
        </Flex>
      </VStack>
      <VStack fontSize="1rem" fontWeight="400" lineHeight="1rem">
        <Flex>
          <Icon as={MdLocationOn} mt="0.2rem" mr="1rem"></Icon>
          <VStack alignItems="flex-start">
            <Text>{address}</Text>
            <Text>{neighborhood}</Text>
            <Text>{city}</Text>
            <Text>{cep}</Text>
            <Text>{room}</Text>
          </VStack>
        </Flex>
      </VStack>
    </VStack>
  );
};
