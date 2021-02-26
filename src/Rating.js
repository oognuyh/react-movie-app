import styled from "styled-components";

const Rating = ({ rating, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Stars rating={rating}>
        <span></span>
      </Stars>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 5px 0;
`;

const Stars = styled.div`
  align-self: center;
  display: inline-block;
  height: 19px;
  width: 108px;
  overflow: hidden;
  background: url(star.png) no-repeat;

  span {
    display: inline-block;
    height: 19px;
    overflow: hidden;
    background: url(star.png) no-repeat;
    background-position: left bottom;
    line-height: 0;
    vertical-align: top;
    width: ${(props) => props.rating * 10}%;
  }
`;

export default Rating;
