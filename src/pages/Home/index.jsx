import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const { auth } = useSelector((state) => state.firebaseReducer);
  const { uid } = auth;

  useEffect(() => {
    if (!uid) {
      navigate("/login");
    }
  }, [uid, navigate]);

  return (
    <div className="home">
      <h1>Hello</h1>
    </div>
  );
};

export default Home;
