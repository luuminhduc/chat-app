import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import NavigationBar from "../../components/NavigationBar";

const Home = () => {
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
    <div className={`home ${!isLight && "dark"}`}>
      <div className="app">
        <NavigationBar />
        <div className="app_content">
          <p>sds</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
