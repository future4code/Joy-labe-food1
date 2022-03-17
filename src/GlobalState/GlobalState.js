import React, { useState, useEffect } from "react";
import { BASE_URL } from "../Constants/BASE_URL";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";

export const GlobalState = (props) => {
  const [cart, setCart] = useState([]);

  return (
    <GlobalContext.Provider value={{ cart, setCart }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
