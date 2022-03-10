import * as React from "react";
import GridContainer from "../components/GridContainer";
import NavigationContainer from "../components/navigation/NavigationContainer";
import "../style.css";

const IndexPage = () => {
  return (
    <main>
      <GridContainer>
        <NavigationContainer />
      </GridContainer>
    </main>
  );
};

export default IndexPage;
