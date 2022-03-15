import * as React from "react";
import ContentSection from "../components/contentSection/contentSection";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";
import GridContainer from "../components/GridContainer";
import NavigationContainer from "../components/navigation/NavigationContainer";
import "../style.css";

const IndexPage = () => {
  return (
    <main>
      <GridContainer>
        <NavigationContainer />
        <ContentSection />
        <TestimonialsSection />
      </GridContainer>
    </main>
  );
};

export default IndexPage;
