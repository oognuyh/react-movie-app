import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
  display: flex;
  height: ${(props) => props.height || "100vh"};
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const ProgressBar = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid white;
  border-right-color: red;
  border-top-color: red;
  border-radius: 100%;

  animation: ${spin} 800ms infinite linear;
`;
