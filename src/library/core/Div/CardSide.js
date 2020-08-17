import styled from "styled-components";
import Div from "./Div";

const CardSide = styled(Div)`
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  transition: transform 1s ease-out;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 10px;
`;

export default CardSide;
