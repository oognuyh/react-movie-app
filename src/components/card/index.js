import React from "react";
import { Container, Frame, Image, Content, Title, Summary, Button, GenreContainer, Genre } from "./styles/card";
import { Rating } from "@material-ui/lab";

const Card = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>;
};

export default Card;

Card.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Card.Image = ({ src, ...restProps }) => {
  return <Image src={src} {...restProps} />;
};

Card.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};

Card.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Card.Summary = ({ children, ...restProps }) => {
  return <Summary {...restProps}>{children}</Summary>;
};

Card.Rating = ({ value, ...restProps }) => {
  return <Rating value={value} {...restProps} readOnly />;
};

Card.GenreContainer = ({ children, ...restProps }) => {
  return <GenreContainer {...restProps}>{children}</GenreContainer>;
};

Card.Genre = ({ children, ...restProps }) => {
  return <Genre {...restProps}>{children}</Genre>;
};

Card.DetailsButton = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};
