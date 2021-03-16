import React from "react";
import styled from "@emotion/styled";
import { BrowserRouter as Router } from "react-router-dom";

import ProductList from "./routes/product-list";
import ProductDetail from "./routes/product-detail";
import colors from "./theme/colors";

const ContainerDiv = styled.div``;

const BodyContent = styled.div``;

function App() {
  return (
    <Router>
      <ContainerDiv>
        <BodyContent>
          <ProductList />
          <ProductDetail />
        </BodyContent>
      </ContainerDiv>
    </Router>
  );
}

export default App;
