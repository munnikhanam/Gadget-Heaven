const Heading = ({ tittle, subtittle }) => {
  return (
    <div className="my-5">
      <h2 className="text-3xl font-bold">{tittle}</h2>
      <h4 className="text-xl font-medium text-[#09080F99]">{subtittle}</h4>
    </div>
  );
};

export default Heading;
