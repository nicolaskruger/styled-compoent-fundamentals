import { FC } from "react";
import styled from "styled-components";

type InputProps = {
    size?: string,
    test?: string
};

const Input = styled.input.attrs((props: InputProps) => ({
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
const PassswordInput = styled(Input).attrs({
    type: "password"
})`
    border: 2px solid aqua;
`;

const AttachingAdditionalPropsScreen: FC = () => {
    return (
        <div>
            <Input placeholder="A small text input" />
            <br />
            <Input placeholder="A bigger text input" size="2em" />
            <br />
            <PassswordInput placeholder="password" />
        </div>
    )
}

export {
    AttachingAdditionalPropsScreen
}