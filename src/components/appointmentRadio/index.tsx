import { Box, Flex, FormLabel, Stack } from "@chakra-ui/react";

export const AppointmentInputRadio = () => {
  return (
    <>
      <FormLabel color="#004238" fontSize="1rem" lineHeight="1.5rem">
        É a sua primeira consulta com este especialista? *
      </FormLabel>

      <fieldset>
        <Stack spacing={5} direction="row" gap="1.5rem">
          <Flex>
            <input type="radio" value="sim" id="sim" name="option" />
            <FormLabel
              color="#004238"
              fontSize="1rem"
              lineHeight="1.5rem"
              ml="0.5rem"
            >
              Sim
            </FormLabel>
          </Flex>
          <Flex>
            <input type="radio" value="nao" id="nao" name="option" />
            <FormLabel
              color="#004238"
              fontSize="1rem"
              lineHeight="1.5rem"
              ml="0.5rem"
            >
              Não
            </FormLabel>
          </Flex>
        </Stack>
      </fieldset>
    </>
  );
};
