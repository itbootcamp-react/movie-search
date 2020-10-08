import React from "react";

import MovieLogo from "../../images/movie.svg";
import ReactLogo from "../../images/react.svg";

import { Wrapper, Content, LogoImg, Logo, Text } from "./styled";

const Header = ({ text }) => (
  <Wrapper>
    <Content>
      <LogoImg src={MovieLogo} alt="rmdb-logo" />
      <Text>{text}</Text>
      <Logo src={ReactLogo} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);

export default Header;
