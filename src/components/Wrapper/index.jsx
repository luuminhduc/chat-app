import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import NavigationBar from "../NavigationBar";

const Wrap = ({ children }) => {
  const navigate = useNavigate();

  const { auth } = useSelector((state) => state.firebaseReducer);
  const { uid } = auth;

  const { isLight } = useSelector((state) => state.themeReducer);

  useEffect(() => {
    if (!uid) {
      navigate("/login");
    }
  }, [uid, navigate]);

  return (
    <div className={`wrap ${!isLight && "dark"}`}>
      <div className="app">
        <NavigationBar />
        <div className="app_content">{children}</div>
      </div>
    </div>
  );
};

export default Wrap;
