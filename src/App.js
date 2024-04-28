import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
const initialState = {
  questions: [],
  status: "loading", //"loading", "ready", "error" "active" "finished"
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "setLoading":
      return { ...state, status: "loading" };
    case "setError":
      return { ...state, status: "error" };
    default:
      throw new Error("unknown action");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(function () {
    fetch("https://opentdb.com/api.php?amount=15").then((res) =>
      res
        .json()
        .then((data) => dispatch({ type: "dataReceived", payload: data }))
        .catch((err) => console.log(err))
    );
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
