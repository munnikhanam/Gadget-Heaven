import PropTypes from "prop-types";

const Heading = ({ tittle, subtittle }) => {
  return (
    <div>
      <div className="my-5">
        <h2 className="text-3xl font-bold">{tittle}</h2>
        <h4 className="text-xl font-medium text-[#09080F99]">{subtittle}</h4>
      </div>
    </div>
  );
};

Heading.propTypes = {
  tittle: PropTypes.string,
  subtittle: PropTypes.string,
};

export default Heading;
