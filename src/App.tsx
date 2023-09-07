import "./App.css";
import styled from "styled-components";
import { DynamicPane } from "./Components/DynamicPane";

const Root = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

function App() {
  return (
    <Root>
      <DynamicPane id="root" />
    </Root>
  );
}

export default App;
