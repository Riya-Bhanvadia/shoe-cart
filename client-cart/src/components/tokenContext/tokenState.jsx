import { useState } from "react";
import TokenContext from "./tokenContext";

const TokenState = (props) => {
  const [token, setToken] = useState();
  const [email, setEmail] = useState();

  const addToken = (data) => {
    setToken(data);
  };
  const addEmail = (data) => {
    // console.log(data);
    setEmail(data);
  };
  return (
    <TokenContext.Provider value={{ token, addToken, email, addEmail }}>
      {props.children}
    </TokenContext.Provider>
  );
};
export default TokenState;
