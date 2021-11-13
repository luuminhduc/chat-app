import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
