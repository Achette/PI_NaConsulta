import { Box, VStack, Text, Image, Flex } from "@chakra-ui/react";
import Img from "../../assets/img/IconDoc.svg"

export type DoctorInfoProps = {
    name: string,
    specialty: string,
    address: string,
    neighborhood: string,
    city: string,
    cep: string | number,
    room?: string | number,
};
export const DoctorInfo = ({ name, specialty, address, neighborhood, city, cep, room } : DoctorInfoProps) => {
  return (
    <VStack>
      <Flex justifyContent="center" alignItems="center">
        <Image src={Img} alt="Perfil Photo" />
        <Box display="flex" flexDirection="column" color="#004238" ml="0.8rem">
          <Text fontSize="1.5rem" fontWeight="400" mb="0.25rem">{name}</Text>
          <Text fontSize="1.5rem" fontWeight="300" >{specialty}</Text>
        </Box>
      </Flex>
      <Box>

      </Box>
    </VStack>
  );
};
