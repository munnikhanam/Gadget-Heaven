import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <div>
      <button className="btn my-2 rounded-full bg-[#09080F0D] shadow-xl text-[#9538E2]  hover:border-transparent hover:text-white active:bg-[#9538E2]  hover:bg-[#9538E2]">
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
