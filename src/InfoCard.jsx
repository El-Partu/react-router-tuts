import { PropTypes } from "prop-types";
function InfoCard({ message, topic }) {
  return (
    <div className="info-card">
      <div>
        <p>{topic}</p>
        <h3>{message}</h3>
      </div>
      <span>10&uarr;</span>
    </div>
  );
}

InfoCard.propTypes = {
  message: PropTypes.string,
  topic: PropTypes.string,
};
export default InfoCard;
