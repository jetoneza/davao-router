import {
    SET_ROUTE,
} from 'actions/app';

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
};

const routes = [
  {
    id: 'obrero',
    name: 'Obrero',
    zoom: 15,
    center: {lat: 7.076676, lng: 125.613320},
    markers: [
      {lat: 7.087530, lng: 125.612569, desc: 'Victoria Plaza'},
      {lat: 7.085437, lng: 125.614285, desc: 'USEP Gate 4'},
      {lat: 7.081621, lng: 125.613459, desc: 'Hybrid Bar'},
      {lat: 7.076707, lng: 125.613298, desc: 'Cor Sta. Ana'},
      {lat: 7.073321, lng: 125.610922, desc: 'Ponciano'},
      {lat: 7.072592, lng: 125.613604, desc: 'ADDU Jacinto Gate'},
      {lat: 7.064069, lng: 125.609838, desc: 'San Pedro Church'},
      {lat: 7.072400, lng: 125.612220, desc: 'ADDU'},
      {lat: 7.077889, lng: 125.613229, desc: 'Gaisano Mall'},
      {lat: 7.085959, lng: 125.617998, desc: 'Stella Maris'},
      {lat: 7.087476, lng: 125.616748, desc: 'USEP Gate 2'},
    ],
    path: [
      {lat: 7.087290, lng: 125.614167},
      {lat: 7.086630, lng: 125.613374},
      {lat: 7.087237, lng: 125.612826},
      {lat: 7.087466, lng: 125.613137},
      {lat: 7.088041, lng: 125.612606},
      {lat: 7.087854, lng: 125.612365},
      {lat: 7.087530, lng: 125.612569},
      {lat: 7.085437, lng: 125.614285},
      {lat: 7.083319, lng: 125.616066},
      {lat: 7.082275, lng: 125.614865},
      {lat: 7.081754, lng: 125.614146},
      {lat: 7.081621, lng: 125.613459},
      {lat: 7.081519, lng: 125.612676},
      {lat: 7.078964, lng: 125.613025},
      {lat: 7.076707, lng: 125.613298},
      {lat: 7.076579, lng: 125.612773},
      {lat: 7.075461, lng: 125.611593},
      {lat: 7.075365, lng: 125.611212},
      {lat: 7.074822, lng: 125.611271},
      {lat: 7.073321, lng: 125.610922},
      {lat: 7.073252, lng: 125.611115},
      {lat: 7.073561, lng: 125.611324},
      {lat: 7.073555, lng: 125.612783},
      {lat: 7.072592, lng: 125.613604},
      {lat: 7.067625, lng: 125.617740},
      {lat: 7.064175, lng: 125.613610},
      {lat: 7.062988, lng: 125.611131},
      {lat: 7.064069, lng: 125.609838},
      {lat: 7.072400, lng: 125.612220},
      {lat: 7.076712, lng: 125.613384},
      {lat: 7.077889, lng: 125.613229},
      {lat: 7.081530, lng: 125.612692},
      {lat: 7.081791, lng: 125.614119},
      {lat: 7.085320, lng: 125.618518},
      {lat: 7.085959, lng: 125.617998},
      {lat: 7.087476, lng: 125.616748},
      {lat: 7.088647, lng: 125.615809},
      {lat: 7.087290, lng: 125.614167},
    ],
  },
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
];

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  routes,
  activeRoute: routes[0],
};
export default function appReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
