import React, { useReducer } from "react";

const colorReducer = (state, action) => {
  if (action.type === "change") {
    if (action.payload === "red") {
      return { color: "red" };
    } else if (action.payload === "green") {
      return { color: "green" };
    } else if (action.payload === "blue") {
      return { color: "blue" };
    } else if (action.payload === "gray") {
      return { color: "gray" };
    } else {
      return state;
    }
  } else {
    return state;
  }
};

export default function ColorChange() {
  const initialState = {
    color: "gray",
  };

  const [state, dispatch] = useReducer(colorReducer, initialState);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "300px",
          height: "300px",
          marginBottom: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "24px",
          borderRadius: "200px",
          backgroundColor: state.color,
        }}
      >
      </div>

      <select
        style={{ padding: "14px", fontSize: "18px", borderRadius: "10px" }}
        onChange={(e) =>
          dispatch({ type: "change", payload: e.target.value })
        }
        value={state.color}
      >
        <option value="gray">Default</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>     
      </select>
    </div>
  );
}
