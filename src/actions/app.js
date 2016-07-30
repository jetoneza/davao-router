///// Constants /////
export const SET_ROUTE = 'DR:SET_ROUTE';

///// Actions /////
/**
 * Set Route
 */
export function setRoute(route) {
  return {
    type: SET_ROUTE,
    payload: route
  };
}

export const actions = {
  setRoute,
};
