import styled from "styled-components";

const Title = styled.span`
    font-size: ${(props) => (props.type == 'title' ? '2em' : '1.3em')};
    font-weight: ${(props) => (props.type == 'title' ? '700' : '400')};
    padding: 0 1em;
    width: 80%;
    text-align: center;
    margin: ${(props) => (props.type == 'title' ? '0' : '2em 0')};;

    ${(props) => {
        if (props.type != 'title') {
            return `
                border-bottom: 1px solid white;
            `;
        }
    }}
`;

export default Title;