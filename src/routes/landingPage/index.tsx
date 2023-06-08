import {
  Footer,
  Header,
  SectionAboutUs,
  SectionDepositions,
  SectionHome,
  SectionServices,
} from "../../components";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <SectionHome />
      <SectionServices />
      <SectionAboutUs />
      <SectionDepositions />
      <Footer />
    </>
  );
};
