import { Form, NavLink, useActionData } from "react-router-dom";
import Button from "./Button";

function SignUp() {
  const errors = useActionData();
  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <Form
        className="form2"
        method="post"
        autoComplete="true"
        action="/sign-up"
      >
        <input
          type="text"
          placeholder="Enter First Name"
          autoComplete="true"
          name="firstName"
        />
        <input
          type="text"
          placeholder="Enter Second Name"
          autoComplete="true"
          name="secondName"
        />
        <input
          type="text"
          placeholder="Username"
          autoComplete="true"
          name="username"
        />
        <input
          type="email"
          placeholder="Enter your email"
          autoComplete="true"
          name="email"
        />
        <input
          type="password"
          placeholder="Enter password"
          autoComplete="true"
          name="password"
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
        />
        {errors?.message && <p className="error">{errors.message}</p>}
        <Button type="submit" className="form-button">
          Sign up
        </Button>
        <p>
          Have an account already? <NavLink to="/login">Login</NavLink>
        </p>
      </Form>
    </div>
  );
}

export default SignUp;
