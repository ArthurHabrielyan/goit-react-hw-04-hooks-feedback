import style from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, handleButton }) => {
  return options.map((option) => {
    return (
      <button
        key={option}
        name={option}
        type="button"
        className={style.button}
        onClick={() => handleButton(option)}
      >
        {option}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleButton: PropTypes.func.isRequired,
};
