import { FormLabel } from "@chakra-ui/react";

type LabelProps = {
  name: string;
};

export const Label = ({ name }: LabelProps) => {
  return (
    <FormLabel
      fontSize="0.5rem"
      fontWeight={400}
      lineHeight="150%"
      color="#00453A"
    >
      {name}
    </FormLabel>
  );
};
