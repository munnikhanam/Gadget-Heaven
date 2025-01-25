import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <div>
      <button className="px-12 py-5 rounded-2xl shadow-xl text-[#FFFFFF] bg-[#9538E2]">
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
