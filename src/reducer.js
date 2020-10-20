const initialState = {
  restaurant: {
    newId: 100,
    name: '',
    category: '',
    address: '',
  },
  restaurants: [],
};

const addRestaurant = ({ state }) => {
  const {
    restaurant, restaurants,
  } = state;

  return {
    restaurant: {
      newId: restaurant.newId + 1,
      name: '',
      category: '',
      address: '',
    },
    restaurants: [...restaurants, restaurant],
  };
};

const updateRestaurantField = ({ state, payload: { name, value } }) => {
  const { restaurant } = state;
  return {
    ...state,
    restaurant: {
      ...restaurant,
      [name]: value,
    },
  };
};

const reducers = {
  addRestaurant,
  updateRestaurantField,
};

export default function reducer(state = initialState, { type, payload }) {
  if (reducers[type]) {
    return reducers[type]({ state, payload });
  }
  return state;
}
