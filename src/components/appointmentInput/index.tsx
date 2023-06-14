import { Box, FormLabel, Input } from "@chakra-ui/react";

type AppointmentInputProps = {
  label?: string;
  value?: string;
  placeholder?: string;
  type?: string
};

export const AppointmentInput = ({ label, value, placeholder, type = 'text' }: AppointmentInputProps) => {
  return (
    <Box w="100%">
      <FormLabel
        color="#004238"
        fontSize="1rem"
        lineHeight="1.5rem"
        mb="0.5rem"
      >
        {label}
      </FormLabel>
      <Input
        value={value}
        w="100%"
        h="3.5rem"
        bgColor="#F4F4F4"
        color="#004238"
        border="0.9px solid #004238"
        borderRadius="0.5rem"
        disabled={placeholder ? false : true}
        placeholder={placeholder ? placeholder : ''}
        type={type}
      />
    </Box>
  );
};
