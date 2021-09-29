import { FC } from "react";
import styled from "styled-components";

const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  };

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`;

const StrangerThing = styled.div`
  color: blue;

  .something {
    border: 1px solid; // an element labeled ".something" inside <Thing>
    display: block;
  }
`;

const PseudoScreen: FC = () => {
    return (
        <>
            <Thing>Hello world!</Thing>
            <Thing>How ya doing?</Thing>
            <Thing className="something">The sun is shining...</Thing>
            <div>Pretty nice day today.</div>
            <Thing>Don't you think?</Thing>
            <div className="something-else">
                <Thing>Splendid.</Thing>
            </div>
            <StrangerThing>
                <label htmlFor="foo-button" className="something">Mystery button</label>
                <button id="foo-button">What do I do?</button>
            </StrangerThing>
        </>
    )
}

export { PseudoScreen }