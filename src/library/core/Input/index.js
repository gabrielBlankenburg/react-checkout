import styled from "styled-components";
import { Base } from "../Shared";

const Input = styled.input`
  ${Base}
  padding: 15px;
  border-radius: 5px;
  margin: 5px 0;
  border: 1px solid #999;
  font-size: 18px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #2c8ff9;
    box-shadow: 0 0 0 2px rgb(40 133 232 / 41%);
  }
`;

export default Input;
