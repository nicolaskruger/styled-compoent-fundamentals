import { FC } from "react";
import styled from "styled-components";

const Box = styled.div({
    background: "palevioletred",
    height: "50px",
    width: "50px"
});

type PropsBoxProps = {
    background: string
}

const PropsBox = styled.div<PropsBoxProps>(props => ({
    background: props.background,
    height: '50px',
    width: '50px'
}))

const StyleObjectScreen: FC = () => {
    return (
        <div>
            <Box />
            <PropsBox background="blue" />
        </div>
    )
}

export {
    StyleObjectScreen
}