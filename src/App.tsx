import React from "react";
import {
  Header,
  SectionAboutUs,
  SectionDepositions,
  SectionHome,
  SectionServices,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <SectionHome />
      <SectionServices />
      <SectionAboutUs />
      <SectionDepositions />
    </>
  );
}

export default App;
