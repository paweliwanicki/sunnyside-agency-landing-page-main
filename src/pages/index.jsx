import * as React from "react";
import "../style.css";
import ContentSection from "../components/contentSection/contentSection";
import TestimonialsSection from "../components/testimonialsSection/TestimonialsSection";
import GridContainer from "../components/GridContainer";
import NavigationContainer from "../components/navigation/NavigationContainer";
import Footer from "../components/footer/Footer";

const IndexPage = () => {
  return (
    <main>
      <GridContainer>
        <NavigationContainer />
        <ContentSection />
        <TestimonialsSection />
        <Footer />
      </GridContainer>
    </main>
  );
};

export default IndexPage;
