import { FC } from "react"
import styled from "styled-components";

type InputProps = {
    inputColor?: string
}

const Input = styled.input<InputProps>`
    padding: 0.5em;
    margin: 0.5em;
    color: ${props => props.inputColor || "palevioletred"};
    background: papayawhip;
    border: none;
    border-radius: 3px;
`;

const PassedProps: FC = () => {
    return (
        <div>
            <Input defaultValue="@probablyup" type="text" />
            <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
        </div>
    )
}

export {
    PassedProps
}