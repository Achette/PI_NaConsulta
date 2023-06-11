import { Box, VStack, Text, Image, Flex, Icon } from "@chakra-ui/react"
import { MdLocationOn } from "react-icons/md"
import Img from "../../assets/img/IconDoc.svg"

export type DoctorInfoProps = {
  name: string
  specialty: string
  address: string
  neighborhood: string
  city: string
  cep: string | number
  room?: string | number
}
export const DoctorInfo = ({
  name,
  specialty,
  address,
  neighborhood,
  city,
  cep,
  room,
}: DoctorInfoProps) => {
  return (
    <VStack
      color="#004238"
      h="100%"
      alignItems="flex-start"
      justifyContent="space-between"
    >
      <Flex justifyContent="center" alignItems="center">
        <Image src={Img} alt="Perfil Photo" />
        <Box display="flex" flexDirection="column" ml="0.8rem">
          <Text fontSize="1.5rem" fontWeight="400" mb="0.25rem">
            {name}
          </Text>
          <Text fontSize="1.5rem" fontWeight="400">
            {specialty}
          </Text>
        </Box>
      </Flex>
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
  )
}
