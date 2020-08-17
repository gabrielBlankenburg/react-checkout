import styled from "styled-components";
import Div from "./Div";

const ReactCheckoutWrapper = styled(Div)`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.background || "transparent"};
  padding: ${(props) => props.padding || "inherit"};
`;

export default ReactCheckoutWrapper;
