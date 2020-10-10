import React from "react";
import { Link } from "react-router-dom";

import MovieLogo from "../../images/movie.svg";
import ReactLogo from "../../images/react.svg";

import { Wrapper, Content, LogoImg, Logo, Text } from "./styled";

const Header = ({ text, text2 }) => (
  <Wrapper>
    <Content>
      <LogoImg src={MovieLogo} alt="logo" />
      <Link to="/" style={{ textDecoration: "none" }}>
        <Text>{text}</Text>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <Text>{text2}</Text>
      </Link>
      <Logo src={ReactLogo} alt="react-logo" />
    </Content>
  </Wrapper>
);

export default Header;
