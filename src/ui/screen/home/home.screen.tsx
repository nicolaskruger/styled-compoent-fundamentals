import { FC } from "react";
import { HomeLi, HomeUl } from "./home.style";
import { Link } from "react-router-dom";
import { serialiseFrontEndRoutes } from "../../../constants";

const HomeScreen: FC = () => {
    return (
        <HomeUl>
            {serialiseFrontEndRoutes().map(val => (
                <HomeLi>
                    <Link to={val}>
                        {val}
                    </Link>
                </HomeLi>
            ))}
        </HomeUl>
    )
}

export {
    HomeScreen
}