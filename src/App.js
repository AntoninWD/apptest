import React, { useState } from "react";
import styled from "styled-components";
import { dataTrappes } from "./Data/data";
import TopTraps from "./Components/TopTraps";
import Traps from "./Components/Traps";

const App = () => {
  const [data, setData] = useState(dataTrappes.trappes);
  return (
    <Wrapper>
      <TopTraps data={data} />
      <Traps data={data} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  margin: 10rem;
  border: 1px solid var(--clr-secondary-5);
  box-shadow: var(--dark-shadow);
  border-radius: 10px;
`;
export default App;
