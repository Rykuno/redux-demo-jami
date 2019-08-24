const initialState = {
  counter: 0,
  items: []
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.payload
      };
    default:
      return state;
  }
};

export default counterReducer;
