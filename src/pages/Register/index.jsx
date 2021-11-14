import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerRequest } from "../../redux/actions/registerAction/actions";
const Register = () => {
  // Get function from react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state.firebaseReducer);

  // Get state from loginReducer;
  const { registerError } = useSelector((state) => state.registerReducer);

  const navigate = useNavigate();

  // Submit form
  const submit = (data) => {
    dispatch(registerRequest(data, navigate));
  };

  return (
    <div className="account">
      <div className="account_content">
        {auth.uid ? (
          <button>Logout</button>
        ) : (
          <React.Fragment>
            <h1>Register</h1>
            <form onSubmit={handleSubmit((data) => submit(data))}>
              <div className="form_control">
                <input
                  className={`${errors.username && "error"}`}
                  {...register("username", { required: true })}
                  type="text"
                  placeholder="Username"
                />
                {errors.username && <small>Username can not be blank</small>}
              </div>
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
                Already have an account?{" "}
                <Link to="/login">
                  <span>Login</span>
                </Link>
              </p>
              {registerError && (
                <div className="account_error">
                  <p>{registerError}</p>
                </div>
              )}
              <button type="submit">Register</button>
            </form>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Register;
