import styled, {css} from "styled-components";
import Div from "./Div";

const InputGroup = styled(Div)`
  width: 100%;

  ${props => 
    props.field == "card-expiration" &&
    css`
      width: 60%;
    `
  }

  ${props => 
    props.field == "card-cvv" &&
    css`
      width: 38%;
    `
  }
`;

export default InputGroup;
