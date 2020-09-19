const initialState={
  update: false,
  Title: "",
  Description: ""
}
 

export function reducer(state = initialState, action) {
    console.log('reducer', state, action);
    return state;
  }

