import React from "react";
import {
  Container,
  Frame,
  Image,
  CloseButton,
  Content,
  Title,
  MetaWrapper,
  Year,
  Runtime,
  Description,
  DownloadWrapper,
  DownloadButton,
} from "./styles/modal";

const Modal = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>;
};

export default Modal;

Modal.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Modal.Image = ({ src, alt, ...restProps }) => {
  return <Image src={src} alt={alt} {...restProps} />;
};

Modal.CloseButton = ({ ...restProps }) => {
  return <CloseButton {...restProps} />;
};

Modal.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};

Modal.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Modal.MetaWrapper = ({ children, ...restProps }) => {
  return <MetaWrapper {...restProps}>{children}</MetaWrapper>;
};

Modal.Year = ({ children, ...restProps }) => {
  return <Year {...restProps}>{children}</Year>;
};

Modal.Runtime = ({ children, ...restProps }) => {
  return <Runtime {...restProps}>{children}</Runtime>;
};

Modal.Description = ({ children, ...restProps }) => {
  return <Description {...restProps}>{children}</Description>;
};

Modal.DownloadWrapper = ({ children, ...restProps }) => {
  return <DownloadWrapper {...restProps}>{children}</DownloadWrapper>;
};

Modal.DownloadButton = ({ children, ...restProps }) => {
  return <DownloadButton {...restProps}>{children}</DownloadButton>;
};
