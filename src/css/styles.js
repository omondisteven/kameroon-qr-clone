import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  div#root {
    height: 100%;
  }
`;

export const Root = styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 50px 0 50px;
`;

export const Result = styled.div`
  width: 320px;
  height: auto;
  white-space: pre-wrap;
  word-break: break-word;
  background-color: #e6e6e6;
  border-radius: 6px;
  padding: 20px 20px 30px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
