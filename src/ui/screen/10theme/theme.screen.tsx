import { FC } from "react"
import styled, { DefaultTheme, ThemeProvider } from "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        main: string
    }
}

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

Button.defaultProps = {
    theme: {
        main: "palevioletred",
        bg: "",
        fg: "fg"
    }
}

const theme: DefaultTheme = {
    main: "mediumseagreen",
    bg: "",
    fg: "fg"
};

const ThemeScreen: FC = () => {
    return (
        <div>
            <Button>Normal</Button>

            <ThemeProvider theme={theme}>
                <Button>Themed</Button>
            </ThemeProvider>

        </div>
    )
}

export {
    ThemeScreen
}