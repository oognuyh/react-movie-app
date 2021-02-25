import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Loader = styled.div`
  width: 100px;
  height: 100px;
  margin: 50% 50%;

  border: 6px solid white;
  border-right-color: red;
  border-top-color: red;
  border-radius: 100%;

  animation: ${spin} 800ms infinite linear;
`;

export default Loader;
