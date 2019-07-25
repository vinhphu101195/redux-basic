const createStore = reducer => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = action => {
    // pass to state the reducer from parameter
    state = reducer(state, action);
    // run every listener
    listeners.forEach(listener => listener());
  };

  const subscibe = listener => {
    listeners.push(listener);
    // unsubcribe by removing the listener
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  // for the initial state
  dispatch({});

  return { getState, dispatch, subscibe };
};
