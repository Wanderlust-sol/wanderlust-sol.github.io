const INITIAL_STATE = {
  menu: false
};

export default function mode(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SHOW_MENU":
      return { ...state, menu: true };
    case "CLOSE_MENU":
      return { ...state, menu: false };
    default:
      return state;
  }
}
