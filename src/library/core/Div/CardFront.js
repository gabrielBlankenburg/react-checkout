import styled from "styled-components";
import CardSide from "./CardSide";

const CardFront = styled(CardSide)`
  background-image: url(${require("../../images/dark-card-front.jpg")});
  text-shadow: 5px 3px black;
`;

export default CardFront;
