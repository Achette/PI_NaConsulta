import {
  Header,
  SectionAboutUs,
  SectionDepositions,
  SectionHome,
  SectionServices,
} from "../../components";
import { FooterForm } from "../../components/footerForm";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <SectionHome />
      <SectionServices />
      <SectionAboutUs />
      <SectionDepositions />
      <FooterForm />
    </>
  );
};
