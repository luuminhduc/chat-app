import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { switchTheme } from "../../redux/actions/themeAction/actions";

const NavigationBar = () => {
  const { isLight } = useSelector((state) => state.themeReducer);
  const dispatch = useDispatch();
  return (
    <div className="navigation_bar">
      <p onClick={() => dispatch(switchTheme())}>
        {isLight ? (
          <i className="far fa-moon"></i>
        ) : (
          <i className="far fa-sun"></i>
        )}
      </p>
    </div>
  );
};

export default NavigationBar;
