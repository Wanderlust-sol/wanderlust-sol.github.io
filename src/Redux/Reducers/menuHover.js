const INITIAL_STATE = {
  hover: false
};

export default function mode(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SHOW_BAR":
      return { ...state, hover: true };
    case "CLOSE_BAR":
      return { ...state, hover: false };
    default:
      return state;
  }
}
