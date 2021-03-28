import React from "react";
import { Container, Input } from "./styles/header";
import { SearchRounded } from "@material-ui/icons";

const Header = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Header;

Header.Input = ({ ...restProps }) => {
  return <Input {...restProps} />;
};

Header.SearchIcon = ({ ...restProps }) => {
  return <SearchRounded {...restProps} />;
};
