import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding: 8px;
`;

export const Frame = styled.div`
  display: flex;
  width: 800px;
  min-width: 800px;
  height: 400px;
  background-color: black;
  border-radius: 8px;
  margin-bottom: 32px;
  box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
`;

export const Image = styled.img`
  flex: 4;
  border-radius: 8px 0px 0px 8px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 6;
  background-color: transparent;
  padding: 8px 16px 8px 16px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 32px;
  line-height: 1;
`;

export const Summary = styled.h2`
  color: white;
  font-size: 16px;
  flex: 1;
  overflow: scroll;
  font-weight: 400;
  --ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const GenreContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 8px;
`;

export const Genre = styled.h6`
  background-color: black;
  color: white;
  font-size: 14px;
  padding: 4px 8px;
  margin: 0px;
`;

export const Button = styled.button`
  background-color: white;
  width: 200px;
  height: 40px;
  background-color: transparent;
  color: white;
  padding: 8px 16px;
  border: 2px solid white;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  align-self: flex-end;

  :hover {
    border-color: yellow;
  }
`;
