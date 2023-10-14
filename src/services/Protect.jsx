/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { loadState } from "./localStorage";
import { setshowloginModal } from "./modalSlice";
import { Navigate } from "react-router-dom";

const hasJWT = () => {
  const data = loadState();
  if (data) {
    return true;
  }
  return false;
};

export const Protect = ({ children }) => {
  const dispatch = useDispatch();
  if (!hasJWT()) {
    dispatch(setshowloginModal(true));
    return <Navigate to={"/"} replace />;
  }
  return children;
};
