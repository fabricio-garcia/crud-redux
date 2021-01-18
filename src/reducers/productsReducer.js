// Each reducer has it own state
const initialState = {
  products: [],
  errors: null,
  loading: false,
};

export default function(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}
