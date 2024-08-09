import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Authcontext from "../LoginProvider/Loginprovider";
import Dummy from "../DummyItems/Dummy";
function Private() {
  const { isLoggedin } = useContext(Authcontext);
  if (!isLoggedin) {
    return <Navigate to="/signin"></Navigate>;
  }
  return <Dummy />;
}

export default Private;
