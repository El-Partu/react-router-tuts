import { Form } from "react-router-dom";
import Button from "./Button";
import { PropTypes } from "prop-types";

function Profile({ setEditProfile }) {
  return (
    <div className="profile">
      <div>
        <Form method="POST" action="/dasboard">
          <div className="profile-image">
            <label htmlFor="profile-name">Upload your image</label>
            <input
              type="image"
              name="profile-image"
              className="image"
              value={<img src="./assets/icons/User.svg " alt="user" />}
            />
          </div>
          <div className="animated-input">
            <label htmlFor="username">Edit username</label>
            <input type="text" name="username" />
          </div>
          <div className="animated-input">
            <label htmlFor="email">Edit Email</label>
            <input type="email" name="email" />
          </div>
          <div className="animated-input">
            <label htmlFor="email">Change password</label>
            <input type="password" name="password" />
          </div>
          <div className="animated-input">
            <label htmlFor="confirm-password">confirm password</label>
            <input type="password" name="confirm-password" />
          </div>
        </Form>
        <div>
          <Button
            type="button"
            className="point-btn1 close"
            onClick={() => setEditProfile(false)}
          >
            cancel
          </Button>
          <Button type="submit" className="point-btn1 form-button profile-btn">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
Profile.propTypes = {
  setEditProfile: PropTypes.func,
};
export default Profile;
