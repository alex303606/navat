import { StackActions, NavigationActions } from 'react-navigation';

function getCurrentRouteParamPrevScreen(navState) {
    if (navState.hasOwnProperty('index')) {
        return getCurrentRouteParamPrevScreen(navState.routes[navState.index]);
    } else {
        if (navState.params && !!navState.params.prevScreen) {
            const {searchValue, prevScreen} = navState.params;
            return {searchValue, prevScreen};
        }
    }
}

const navigationMiddleware = ({dispatch, getState}) => next => async (action) => {
    switch (action.type) {
        case NavigationActions.BACK:
            const store = getState();
            const routeParams = getCurrentRouteParamPrevScreen(store.nav);
            if (routeParams && !!routeParams.prevScreen) {
                dispatch(StackActions.popToTop());
                return dispatch(NavigationActions.navigate({
                    routeName: routeParams.prevScreen,
                    params: {
                        searchValue: routeParams.searchValue,
                    },
                }));
            }
            return next(action);

        default:
            return next(action);
    }
};

export default navigationMiddleware;
