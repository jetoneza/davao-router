import {
    SET_ROUTE,
    SET_MARKER,
} from 'actions/app';

// TODO: Implement server side copy of routes.json.
// TODO: Sync when local copy is outdated.
// TODO: Sync in background.
import routes from 'data/routes.json';

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_ROUTE]: (state, action) => {
    return {
      ...state,
      activeRoute: action.payload,
    };
  },
  [SET_MARKER]: (state, action) => {
    return {
      ...state,
      activeMarker: action.payload,
    };
  },
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  routes,
  activeRoute: routes[0],
  activeMarker: null,
};
export default function appReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
