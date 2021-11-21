import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import { switchTheme } from "../../redux/actions/themeAction/actions";

const NavigationBar = () => {
  const { isLight } = useSelector((state) => state.themeReducer);
  const dispatch = useDispatch();

  const arr = ["profile", "users"];

  const getIcon = (name) => {
    switch (name) {
      case "users":
        return <i className="fas fa-search"></i>;
      default:
        return <i className="far fa-user-circle"></i>;
    }
  };

  const CustomLink = ({ to }) => {
    let resolve = useResolvedPath(to);
    let path = resolve.pathname.split("/")[2];
    let match = useMatch({ path, end: true });
    return (
      <Link to={`/${to}`}>
        <p className={`icon ${match && "active"}`}>{getIcon(to)}</p>
      </Link>
    );
  };

  return (
    <div className={`navigation_bar ${!isLight && "dark"}`}>
      <p className="icon" onClick={() => dispatch(switchTheme())}>
        {isLight ? (
          <i className="far fa-moon"></i>
        ) : (
          <i className="far fa-sun"></i>
        )}
      </p>
      {arr.map((el) => (
        <CustomLink key={el} to={el} />
      ))}
    </div>
  );
};

export default NavigationBar;
