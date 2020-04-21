const INITIAL_STATE = {
  mode: "home"
};

export default function mode(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "COVER":
      return { ...state, mode: "cover" };
    case "HOME":
      return { ...state, mode: "home" };
    default:
      return state;
  }
}
