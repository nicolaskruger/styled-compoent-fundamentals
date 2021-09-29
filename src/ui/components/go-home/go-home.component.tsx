import { GoHomeDiv } from "./go-home.styled"
import { Link } from "react-router-dom";
import { FRONTEND_ROUTES } from "../../../constants";
import { HomeIcon } from "../../../assets";

const GoHomeComponent = () => {
    return (
        <GoHomeDiv>
            <Link to={FRONTEND_ROUTES.HOME}>
                <HomeIcon />
            </Link>
        </GoHomeDiv>
    )
}

export {
    GoHomeComponent
}