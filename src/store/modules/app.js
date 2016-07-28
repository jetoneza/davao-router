// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {};

const routes = [
  {
    id: 'buhangin_bajada',
    name: 'Buhangin - Bajada'
  },
  {
    id: 'buhangin_dacudao',
    name: 'Buhangin - Dacudao'
  },
  {
    id: 'ecoland',
    name: 'Ecoland'
  },
  {
    id: 'route1',
    name: 'Route 1'
  },
  {
    id: 'route2',
    name: 'Route 2'
  },
  {
    id: 'route3',
    name: 'Route 3'
  },
  {
    id: 'route4',
    name: 'Route 4'
  },
  {
    id: 'route5',
    name: 'Route 5'
  },
  {
    id: 'route6',
    name: 'Route 6'
  },
  {
    id: 'route7',
    name: 'Route 7'
  },
  {
    id: 'route8',
    name: 'Route 8'
  },
  {
    id: 'route9',
    name: 'Route 9'
  },
  {
    id: 'route10',
    name: 'Route 10'
  },
  {
    id: 'maa',
    name: 'Maa'
  },
  {
    id: 'matina',
    name: 'Matina'
  },
  {
    id: 'Puan',
    name: 'Puan'
  },
  {
    id: 'obrero',
    name: 'Obrero'
  },
];

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  routes,
};
export default function appReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
