import { createGlobalStyle } from "styled-components/";

export const lightTheme = {
  body: "#fff",
  fontColor: "#fff",
};
export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`

body {
  background-color: ${(props) => props.theme.body}
}
`;
