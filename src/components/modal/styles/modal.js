import styled from "styled-components";
import { Close } from "@material-ui/icons";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 3;
`;

export const Frame = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  width: 800px;
  height: 80%;
  min-height: 800px;
  min-width: 800px;
  background-color: black;
`;

export const CloseButton = styled(Close)`
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  padding: 4px;
  margin: 8px;
  border: 1px solid white;
  border-radius: 50%;
  cursor: pointer;

  :hover {
    color: yellow;
  }
`;

export const Image = styled.img`
  height: 400px;
  width: 100%;
`;

export const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-flow: column nowrap;
`;

export const Title = styled.h1`
  margin: 0;
  color: white;
  width: 100%;
`;

export const MetaWrapper = styled.div`
  display: flex;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid white;
  border-radius: 4px;
  color: white;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export const Runtime = styled.h4`
  margin: 0;
  text-align: right;
`;

export const Year = styled.h4`
  margin: 0;
  text-align: right;
`;

export const Description = styled.h4`
  margin: 0;
  color: white;
`;

export const DownloadWrapper = styled.div`
  justify-content: flex-end;
  display: flex;
  flex: 1;
  align-items: flex-end;
`;

export const DownloadButton = styled.a`
  color: white;
  padding: 4px 8px;
  margin: 8px 4px;
  border: 1px solid white;
  border-radius: 4px;
  text-decoration: none;

  :hover {
    background-color: yellow;
    color: black;
  }
`;
