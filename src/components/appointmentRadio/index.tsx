import { Box, Flex, FormLabel, Stack } from "@chakra-ui/react";

type AppointmentRadioProps = {
  label: string;
  name: string;
  value1: string;
  value2: string;
};

export const AppointmentInputRadio = ({
  label,
  name,
  value1,
  value2,
}: AppointmentRadioProps) => {
  return (
    <Box>
      <FormLabel color="#004238" fontSize="1rem" lineHeight="1.5rem">
        {label}
      </FormLabel>

      <fieldset>
        <Stack spacing={5} direction="row" gap="1.5rem">
          <Flex>
            <input type="radio" value={value1} id={value1} name={name} />
            <FormLabel
              color="#004238"
              fontSize="1rem"
              lineHeight="1.5rem"
              ml="0.5rem"
            >
              {value1}
            </FormLabel>
          </Flex>
          <Flex>
            <input type="radio" value={value2} id={value2} name={name} />
            <FormLabel
              color="#004238"
              fontSize="1rem"
              lineHeight="1.5rem"
              ml="0.5rem"
            >
              {value2}
            </FormLabel>
          </Flex>
        </Stack>
      </fieldset>
    </Box>
  );
};
