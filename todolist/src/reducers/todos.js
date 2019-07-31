const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      if (state[0].id === action.id) {
        console.log("vo roi");

        return { ...state, completed: !state.completed };
      } else {
        return state;
      }

    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map(el => {
        return todo(el, action);
      });
    default:
      return state;
  }
};

export default todos;
