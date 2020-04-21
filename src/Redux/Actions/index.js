export const coverMode = () => {
  return {
    type: "COVER",
    payload: { mode: "cover" }
  };
};

export const homeMode = () => {
  return {
    type: "HOME",
    payload: { mode: "home" }
  };
};

export const showMenu = () => {
  return {
    type: "SHOW_MENU"
  };
};

export const closeMenu = () => {
  return {
    type: "CLOSE_MENU"
  };
};

export const showBar = () => {
  return {
    type: "SHOW_BAR"
  };
};

export const closeBar = () => {
  return {
    type: "CLOSE_BAR"
  };
};
