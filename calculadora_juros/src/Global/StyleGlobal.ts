import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Jetbrains Mono Regular";
}
    body {
        height: 100vh;
        background-color: aliceblue;
    }
`;

export default GlobalStyle;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;
