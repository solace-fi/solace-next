import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const broub = theme`colors.purple.500`;
// console.log();
const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${broub};
    ${tw`antialiased`}
  }
`;

const GlobalStyles = (): JSX.Element => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
