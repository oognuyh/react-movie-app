import { Container, ProgressBar } from "./styles/loader";

const Loader = ({ ...restProps }) => {
  return (
    <Container {...restProps}>
      <ProgressBar />
    </Container>
  );
};

export default Loader;
