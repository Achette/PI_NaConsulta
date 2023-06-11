import { VStack } from "@chakra-ui/react"
import {
  DoctorCard,
  Footer,
  HeaderSearchDoctor,
  SearchFilters,
} from "../../components"

export const SearchDoctors = () => {
  return (
    <>
      <HeaderSearchDoctor />
      <VStack mb="1rem">
        <SearchFilters />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </VStack>
      <Footer />
    </>
  )
}
