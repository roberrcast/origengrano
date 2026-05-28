import { createGlobalStyle } from "styled-components";
import { fluid } from "./mixins";

export const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
 }

body {
background-color: ${({ theme }) => theme.colors.background};
color: ${({ theme }) => theme.colors.text.main};
font-family: ${({ theme }) => theme.typography.fontFamily};
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
overflow-x: hidden;
}

button {
font-family: inherit;
cursor: pointer;
}

input {
font-family: inherit;
}

a {
text-decoration: none;
color: inherit;
}

.reveal {
opacity: 0;
transform: translateY(30px);
transition: all 0.8s ease-out;
}

.reveal.active {
opacity: 1;
transform: translateY(0);
}
`;
