import { ButtonHTMLAttributes, FC } from "react";
import styled from "styled-components";

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const ReversedButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = props => {
    return (
        <Button {...props} children={
            (props.children as string).split("").reverse()
        } />
    )
}

const ExtendingEtylesScreen: FC = () => {
    return (
        <div>
            <Button>
                Normal
            </Button>
            <TomatoButton>
                Tomato
            </TomatoButton>
            <Button as="a" href="#">Link with Button styles</Button>
            <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
            <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
        </div>
    )
}

export { ExtendingEtylesScreen }