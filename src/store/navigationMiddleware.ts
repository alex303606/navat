import { StackActions, NavigationActions } from 'react-navigation';

function getCurrentRouteParamPrevScreen(navState) {
  if (navState.hasOwnProperty('index')) {
    return getCurrentRouteParamPrevScreen(navState.routes[navState.index]);
  } else {
    if (navState.params && !!navState.params.prevScreen) {
        return navState.params.prevScreen;
    }
  }
}

const navigationMiddleware = ({dispatch, getState}) => next => async (action) => {
    switch (action.type) {
        case NavigationActions.BACK:
            const store = getState();
            const routeName = getCurrentRouteParamPrevScreen(store.nav);
            if (!!routeName) {
                dispatch(StackActions.popToTop());
                return dispatch(NavigationActions.navigate({routeName}));
            }
            return next(action);

        default:
            return next(action);
    }
};

export default navigationMiddleware;
