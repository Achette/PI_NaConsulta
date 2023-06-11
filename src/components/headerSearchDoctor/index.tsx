import { Image, Flex, Button, FormControl, Input } from "@chakra-ui/react"
import Logo from "../../assets/img/Logo.svg"
import { useNavigate } from "react-router-dom"

export const HeaderSearchDoctor = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/access")
  }

  return (
    <Flex
      w="100%"
      h="7.5rem"
      bgColor="#3DCCB7"
      color="#FFF"
      justifyContent="space-evenly"
      alignItems="center"
      position="fixed"
      zIndex="1"
      top="0"
    >
      <Image w="20.625rem" h="4.5rem" src={Logo} />

      <FormControl>
        <Flex
          fontSize="1.25rem"
          lineHeight="2.25rem"
          fontWeight={400}
          w="36.9rem"
          justifyContent="space-between"
          gap="0.5rem"
        >
          <Input
            placeholder="Médico, Serviço, Especialidade"
            p="1.125rem 1rem"
            w="15.9rem"
            border="none"
            borderRadius="0.5rem"
          />
          <Input
            placeholder="Local ex. São Paulo"
            p="1.125rem 1rem"
            w="10.9rem"
            border="none"
            borderRadius="0.5rem"
          />
          <Button
            w="9.1875rem"
            h="3.75rem"
            bgColor="#004238"
            color="#FFF"
            borderRadius="0.5rem"
            fontSize="1.25rem"
            fontWeight={500}
          >
            Pesquisar{" "}
          </Button>
        </Flex>
      </FormControl>

      <Button
        w="12.25rem"
        h="2.625rem"
        borderRadius="2.5rem"
        color="#FFF"
        border="1px solid #FFF"
        bgColor="#3DCCB7"
        fontSize="0.875rem"
        _hover={{ bg: "#FFF", color: "#3DCCB7", fontWeight: "600" }}
        onClick={() => handleNavigate()}
      >
        MINHA CONTA
      </Button>
    </Flex>
  )
}
