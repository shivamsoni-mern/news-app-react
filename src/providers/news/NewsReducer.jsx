export default function NewsReducer(state, action) {
  switch (action.type) {
    case "GET_NEWS": {
      return { ...state, articles: action.payload };
    }
    case "RESET_NEWS": {
      return { ...state, articles: null };
    }
    default: {
      return state;
    }
  }
}
