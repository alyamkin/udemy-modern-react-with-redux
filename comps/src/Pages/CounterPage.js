import produce from "immer";
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment_count";
const DECREMENT_COUNT = "decrement_count";
const SET_VALUE_TO_ADD = "set_value_to_add";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

const reducer = (state, action) => {
  const { type, payload } = action;
  //const { count, valueToAdd } = state;

  // with immer
  switch (type) {
    case INCREMENT_COUNT:
      state.count = state.count + payload;
      return;

    case DECREMENT_COUNT:
      state.count = state.count - payload;
      return;

    case SET_VALUE_TO_ADD:
      state.valueToAdd = payload;
      return;

    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;

    default:
      return;
  }
  // switch (type) {
  //   case INCREMENT_COUNT:
  //     return {
  //       ...state,
  //       count: state.count + payload,
  //     };

  //   case DECREMENT_COUNT:
  //     return {
  //       ...state,
  //       count: state.count - payload,
  //     };

  //   case SET_VALUE_TO_ADD:
  //     return {
  //       ...state,
  //       valueToAdd: payload,
  //     };

  //   case ADD_VALUE_TO_COUNT:
  //     return {
  //       ...state,
  //       count: count + valueToAdd,
  //       valueToAdd: 0,
  //     };

  //   default:
  //     return state;
  // }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({ type: INCREMENT_COUNT, payload: 1 });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT_COUNT, payload: 1 });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({ type: SET_VALUE_TO_ADD, payload: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: ADD_VALUE_TO_COUNT, payload: "" });
  };

  return (
    <div>
      <Panel className="m-3">
        <h1 className="text-lg">Count is {state.count}</h1>
        <div className="flex flex-row">
          <Button onClick={increment}>Increment</Button>
          <Button onClick={decrement}>Decrement</Button>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Add a lot</label>
          <input
            className="p-1 m-3 bg-gray-50 border border-gray-300"
            type="number"
            value={state.valueToAdd || ""}
            onChange={handleChange}
          />
          <Button>Add it!</Button>
        </form>
      </Panel>
    </div>
  );
}

export default CounterPage;
