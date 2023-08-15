const obj = {
    a: {
      // To safely update obj.a.c, we have to copy each piece
      c: 3,
      d: 70
    },
    b: 2
  }


const obj2 = {
    ...obj,
    a: {
        ...obj.a,
        c: 42
    },
};

console.log(obj2)

const initialState = {
    value: 0
};

const counter = (state = initialState, action) => {
    if(action.type === 'counter/increment') {
        return {
            ...state,
            value: state.value + 1;
        }
    }
    return state;
}