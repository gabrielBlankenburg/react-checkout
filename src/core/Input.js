import styled from "styled-components";

const Input = styled.input`
    margin-top: .3em;
    outline: none;
    border: 1px solid white;
    padding: ${(props) => (props.type === 'color' ? '0' : '.5em')};
    width: 80%;
    border-radius: 5px;
    background-color: #484848;
    color: white;
`;

export default Input;