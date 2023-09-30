import { useState } from "react";
import TokenContext from "./tokenContext";

const TokenState = (props) => {
  const [token, setToken] = useState();

  const addToken = (data) => {
    setToken(data);
  };
  return (
    <TokenContext.Provider value={{ token, addToken }}>
      {props.children}
    </TokenContext.Provider>
  );
};
export default TokenState;
