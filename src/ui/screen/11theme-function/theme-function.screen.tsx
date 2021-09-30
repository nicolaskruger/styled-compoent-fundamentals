import { FC } from "react";
import styled, { DefaultTheme, ThemeProvider } from "styled-components";


declare module 'styled-components' {
    export interface DefaultTheme {
        fg: string,
        bg: string
    }
}

const Button = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

const theme: DefaultTheme = {
    fg: "palevioletred",
    bg: "white",
    main: "main"
}


const invertTheme = ({ bg, fg, main }: DefaultTheme): DefaultTheme => (
    {
        fg: bg,
        bg: fg,
        main: main
    }
)

const ThemeFunction: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Button>Default Theme</Button>

                <ThemeProvider theme={invertTheme}>
                    <Button>Inverted Theme</Button>
                </ThemeProvider>
            </div>
        </ThemeProvider>
    )
}

export {
    ThemeFunction
}