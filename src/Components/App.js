import { Button } from "Components/Common";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body{
   background: white;
   min-height: 100vh;
   margin: 0;
   color: black;
   font-family: 'Kaushan Script'
 }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>App</h1>
      <Button secondary>secondary button</Button>
      <Button primary>primary button</Button>
      <Button large>disabled button</Button>
    </>
  );
}

export default App;
