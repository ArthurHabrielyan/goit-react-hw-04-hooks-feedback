import PropTypes from "prop-types";

export const Section = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
