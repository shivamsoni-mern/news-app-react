import { createContext, useReducer } from "react";

const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  // initial state
  const initialState = {
    // dark: false,
    // dark: localStorage.getItem("theme"), // gets stored in string data type
    dark: JSON.parse(localStorage.getItem("theme")), // "parse" ==> OBJECT to STRING
  };

  // reducer to update state based on type of action
  const reducer = (state, action) => {
    // storing the Theme preference in local storage, as to make it persist b/w reloads

    localStorage.setItem("theme", !state.dark);

    switch (action.type) {
      case "CHANGE_THEME": {
        return {
          dark: !state.dark,
        };
      }
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
