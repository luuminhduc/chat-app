import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../redux/actions/loginAction/actions";
const Login = () => {
  // Get function from react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  // Get state from loginReducer;
  const { loginError } = useSelector((state) => state.loginReducer);

  const navigate = useNavigate();

  // Submit form
  const submit = (data) => {
    dispatch(loginRequest(data, navigate));
  };

  return (
    <div className="account">
      <div className="account_content">
        <h1>Login</h1>
        <form onSubmit={handleSubmit((data) => submit(data))}>
          <div className="form_control">
            <input
              className={`${errors.email && "error"}`}
              {...register("email", { required: true })}
              type="text"
              placeholder="Email"
            />
            {errors.email && <small>Email can not be blank</small>}
          </div>
          <div className="form_control">
            <input
              className={`${errors.password && "error"}`}
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
            />
            {errors.password && <small>Password can not be blank</small>}
          </div>
          <p className="account_switch">
            Do not have an account yet?{" "}
            <Link to="/register">
              <span>Register</span>
            </Link>
          </p>
          {loginError && (
            <div className="account_error">
              <p>{loginError}</p>
            </div>
          )}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
