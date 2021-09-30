import { FC } from "react";
import { BrowserRouter, RouteProps, Switch } from "react-router-dom";
import { FRONTEND_ROUTES } from "../../constants";
import { AdaptBasedOnProps, AnimationScreen, AttachingAdditionalPropsScreen, ExtendingEtylesScreen, GetStartScreen, GlobalStyleScreen, HomeScreen, PassedProps, PseudoScreen, ReferingToOtherComponentScreen, StyleAnyComponentScreen, StyleObjectScreen, ThemeFunction, ThemeScreen } from "../../ui";
import { PublicRoute } from "../custom/public/publict.route";


const { HOME,
    GET_STARTED,
    ADAPT_BASED_ON_PROPS,
    EXTEND_STYLES,
    STYLE_ANY_COMPONENT,
    PASSED_PROPS,
    PSEUDO,
    GLOBAL_STYLE,
    ATTACHING_ADDITIONAL_PROPS,
    ANIMATIONS,
    THEME,
    THEME_FUNCTION,
    REFERING_TO_OTHER_COMPONENT,
    STYLE_OBJECTS
} = FRONTEND_ROUTES;

type RouteBuild = {
    path: string,
    exact: boolean,
    component: FC,
    CustomRoute: FC<RouteProps>
}


const RouterBuilder: FC = ({ children }) => {
    const builder: RouteBuild[] = [
        {
            CustomRoute: PublicRoute,
            component: StyleObjectScreen,
            exact: true,
            path: STYLE_OBJECTS
        },
        {
            CustomRoute: PublicRoute,
            component: ReferingToOtherComponentScreen,
            exact: true,
            path: REFERING_TO_OTHER_COMPONENT
        },
        {
            CustomRoute: PublicRoute,
            component: ThemeFunction,
            exact: true,
            path: THEME_FUNCTION
        },
        {
            CustomRoute: PublicRoute,
            component: ThemeScreen,
            exact: true,
            path: THEME
        },
        {
            CustomRoute: PublicRoute,
            component: AnimationScreen,
            exact: true,
            path: ANIMATIONS
        },
        {
            CustomRoute: PublicRoute,
            component: AttachingAdditionalPropsScreen,
            exact: true,
            path: ATTACHING_ADDITIONAL_PROPS
        },
        {
            CustomRoute: PublicRoute,
            component: GlobalStyleScreen,
            exact: true,
            path: GLOBAL_STYLE
        },
        {
            CustomRoute: PublicRoute,
            component: PseudoScreen,
            exact: false,
            path: PSEUDO
        },
        {
            CustomRoute: PublicRoute,
            component: PassedProps,
            exact: false,
            path: PASSED_PROPS
        },
        {
            CustomRoute: PublicRoute,
            component: StyleAnyComponentScreen,
            exact: false,
            path: STYLE_ANY_COMPONENT
        },
        {
            CustomRoute: PublicRoute,
            component: ExtendingEtylesScreen,
            exact: false,
            path: EXTEND_STYLES
        },
        {
            CustomRoute: PublicRoute,
            component: AdaptBasedOnProps,
            exact: false,
            path: ADAPT_BASED_ON_PROPS
        },
        {
            CustomRoute: PublicRoute,
            component: GetStartScreen,
            exact: false,
            path: GET_STARTED
        },
        {
            CustomRoute: PublicRoute,
            component: HomeScreen,
            exact: false,
            path: HOME
        }
    ]
    return (
        <BrowserRouter>
            <Switch>
                {
                    builder.map(({ component, exact, path, CustomRoute }, index) => (
                        <CustomRoute key={index} component={component} exact={exact} path={path} />
                    )
                    )
                }
            </Switch>
            {children}
        </BrowserRouter>
    )
}

export { RouterBuilder }