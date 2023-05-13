import { Input } from "@chakra-ui/react";

type FooterInputProps = {
  placeholder: string;
  heigth?: string;
};

export const FooterInput = ({
  placeholder,
  heigth = "2rem",
}: FooterInputProps) => {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      w="100%"
      h={heigth}
      borderRadius="0.5rem"
      backgroundColor="#DCE9E2"
      border="0.604861px solid #00856F"
      mt="0.25rem"
      _placeholder={{
        color: "rgba(73, 80, 87, 0.5)",
        fontSize: "0.5rem",
        lineHeight: "150%",
        pl: "0.625rem",
      }}
    />
  );
};
