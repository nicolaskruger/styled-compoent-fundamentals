import { FC } from "react";
import styled from "styled-components";

type InputProps = {
    size?: string
};

const Input = styled.input.attrs<InputProps>(props => ({
    type: "text",
    size: props.size || "1em"
}))`
    color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

const AttachingAdditionalPropsScreen: FC = () => {
    return (
        <div>
            <Input placeholder="A small text input" />
            <br />
            <Input placeholder="A bigger text input" size="2em" />
        </div>
    )
}

export {
    AttachingAdditionalPropsScreen
}