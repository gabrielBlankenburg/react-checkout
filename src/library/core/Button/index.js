import styled from "styled-components";
import { Base } from "../Shared";

const Button = styled.button`
  ${Base}
  display: flex;
  background-color: #004c8a;
  outline: none;
  border: none;
  padding: 20px;
  font-size: 18px;
  width: 100%;
  border-radius: 5px;
  color: white;
  justify-content: center;

  &:hover {
    cursor: ${(props) => (props.type === "submit" ? "pointer" : "auto")};
  }
`;

export default Button;
