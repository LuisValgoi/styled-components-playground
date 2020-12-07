import styled from "styled-components";

export const HeaderRegular = styled.h1`
  color: red;
  background-color: black;
  font-size: ${(props) => `${props.fontSize}px`};

  span {
    font-size: 15px;
  }
`;

export const HeaderSmall = styled(HeaderRegular)`
  color: green;
  font-size: 30px;
`;
