import { useState } from "react";
import { Form, Link, NavLink, useActionData } from "react-router-dom";
import closedEyeSvg from "./assets/icons/hide.svg";
import openedEyeSvg from "./assets/icons/Eye.svg";
import loginImg from "./assets/Rectangle-76.png";
import Button from "./Button";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");
  const errors = useActionData();

  console.log(errors);
  return (
    <div className="login-correct">
      <div className="login">
        <div>
          <h1>Log in to your account</h1>
          <h4>Welcome back! Please enter your details.</h4>
          <Form method="post" action="/login" className="form">
            <div>
              <input
                type="email"
                autoComplete="true"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <input
                type={inputType}
                name="password"
                autoComplete="true"
                placeholder="Enter your password"
              />

              {showPassword ? (
                <span>
                  <img
                    src={closedEyeSvg}
                    alt="hide password"
                    onClick={() => {
                      setShowPassword(false);
                      setInputType("password");
                    }}
                  />
                </span>
              ) : (
                <span>
                  <img
                    src={openedEyeSvg}
                    alt="show password"
                    onClick={() => {
                      setShowPassword(true);
                      setInputType("text");
                    }}
                  />
                </span>
              )}
            </div>
            {errors?.password && <p className="error">{errors.password}</p>}
            <Button type="submit" className="form-button">
              Login
            </Button>
            <div>
              <p>
                Don&apos;t have an account?
                <NavLink to="/sign-up">Sign up</NavLink>
              </p>
              <Link to="/forgot-password">Forgot password</Link>
            </div>
          </Form>
        </div>
        <img src={loginImg} alt="product image" />
      </div>
    </div>
  );
}

export default Login;
