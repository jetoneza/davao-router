///// Constants /////
export const SET_ROUTE = 'DR:SET_ROUTE';
export const SET_MARKER = 'DR:SET_MARKER';

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

export function setMarker(index) {
  return {
    type: SET_MARKER,
    payload: index,
  }
}

export const actions = {
  setRoute,
  setMarker,
};
