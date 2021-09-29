import { FC, LinkHTMLAttributes } from "react";
import styled from "styled-components";

const Link: FC<LinkHTMLAttributes<HTMLLinkElement>> = ({ className, children }) => {
    return (
        <a className={className}>
            {children}
        </a>
    )
}

const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
`;

const StyleAnyComponentScreen: FC = () => {
    return (
        <div>
            <Link>
                Unstyled, boring Link
            </Link>
            <br />
            <StyledLink> Styled, exciting Link</StyledLink>
        </div>
    )
}

export { StyleAnyComponentScreen }