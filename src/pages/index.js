import * as React from "react";
import ContentSection from "../components/contentSection/contentSection";
import GridContainer from "../components/GridContainer";
import NavigationContainer from "../components/navigation/NavigationContainer";
import "../style.css";

const IndexPage = () => {
  return (
    <main>
      <GridContainer>
        <NavigationContainer />
        <ContentSection />
      </GridContainer>
    </main>
  );
};

export default IndexPage;
