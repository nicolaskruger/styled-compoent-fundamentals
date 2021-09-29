const FRONTEND_ROUTES = {
    HOME: "/",
    GET_STARTED: "/get-started",
    ADAPT_BASED_ON_PROPS: "/adapt-base-on-props",
    EXTEND_STYLES: "/extends-styles",
    STYLE_ANY_COMPONENT: "/style-any-compnent",
    PASSED_PROPS: "/passed-props",
    PSEUDO: "/pseudo",
    GLOBAL_STYLE: "/global-style",
    ATTACHING_ADDITIONAL_PROPS: "/attaching_additional_props"
}

const serialiseFrontEndRoutes = () =>
    Object.keys(FRONTEND_ROUTES)
        .map(key => FRONTEND_ROUTES[key as "HOME"])


export {
    FRONTEND_ROUTES,
    serialiseFrontEndRoutes
}