import { PropTypes } from "prop-types";
function ComponentDesc({ topic, message }) {
  return (
    <div className="welcome-name">
      <h1>{topic}</h1>
      <p>{message}</p>
    </div>
  );
}

ComponentDesc.propTypes = {
  topic: PropTypes.string,
  message: PropTypes.string,
};

export default ComponentDesc;
