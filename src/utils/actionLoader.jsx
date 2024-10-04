import { redirect } from "react-router-dom";

export const LoginAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    email: data.get("email"),
    password: data.get("password"),
  };
  const errors = {};
  if (
    typeof submission["email"] !== "string" ||
    submission["email"] === "" ||
    !submission["email"].includes("@")
  ) {
    errors.email = "Email or password is invalid";
  }
  if (
    typeof submission["password"] !== "string" ||
    submission["password"] === "" ||
    submission["password"].length < 6
  ) {
    errors["password"] = "Email or password invalid";
  }

  //data contains error
  if (Object.keys(errors).length) {
    return errors;
  }
  //Post

  //redirect
  return redirect("/dashboard");
};

export const SignUpAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    firstName: data.get("firstName"),
    secondName: data.get("secondName"),
    username: data.get("username"),
    password: data.get("password"),
    confirmPassword: data.get("confirmPassword"),
  };

  const errors = {};

  if (
    submission.firstName !== "" &&
    submission.secondName !== "" &&
    submission.username !== "" &&
    submission.password === submission.confirmPassword
  ) {
    return redirect("/dashboard");
  }

  errors.message = "All input fields are required";
  return errors;
  // console.log(submission);

  //post

  //Redirect
};
