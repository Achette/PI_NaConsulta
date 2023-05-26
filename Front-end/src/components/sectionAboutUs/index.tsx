import { Flex, HStack, Heading, Image, Text } from "@chakra-ui/react";
import DoctorWithFamily from "../../assets/img/doc-with-family.png";

export const SectionAboutUs = () => {
  return (
    <Flex
      h="46rem"
      bgColor="rgba(61, 204, 183, 0.16)"
      p="10rem 11.875rem"
      id="aboutUs"
    >
      <HStack gap="5rem">
        <Image src={DoctorWithFamily} />
        <Flex flexDirection="column">
          <Heading
            as="h2"
            fontSize="1rem"
            letterSpacing="0.05em"
            fontWeight={500}
            lineHeight="1.5rem"
            color="rgba(0, 195, 165, 1)"
            mb="1rem"
          >
            SOBRE NÓS
          </Heading>

          <Heading
            as="h3"
            fontWeight={700}
            fontSize="2rem"
            lineHeight="3rem"
            color="#004238"
            mb="1rem"
          >
            Quem somos e porque existimos
          </Heading>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            incidunt accusamus nobis voluptate quas sapiente pariatur facere,
            cum quasi excepturi atque, itaque quia necessitatibus est voluptatem
            enim culpa doloremque consequatur! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Reprehenderit unde voluptas atque
            maiores provident illum aperiam saepe, explicabo molestiae ad iure,
            impedit voluptatem dolor nam. Nobis beatae quibusdam accusamus
            repellendus.
          </Text>
        </Flex>
      </HStack>
    </Flex>
  );
};
