import { FC } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const GetStartScreen: FC = () => {
    return (
        <Wrapper>
            <Title>
                Hello word!
            </Title>
        </Wrapper>
    )
}

export {
    GetStartScreen
}