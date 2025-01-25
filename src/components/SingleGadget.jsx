import PropTypes from "prop-types";

const SingleGadget = ({ product }) => {
  const { product_image, product_title, price } = product;
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure className="px-10 pt-10">
          <img src={product_image} alt={product_title} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">{product_title}</h2>
          <p className="font-medium text-xl text-[#09080F99]">
            Price: {price} $
          </p>
          <div className="card-actions mt-5">
            <button className="text-[#9538E2] font-semibold text-lg border border-[#9538E2] bg-transparent px-10 py-3 rounded-full">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleGadget.propTypes = {
  product: PropTypes.object.isRequired,
};

export default SingleGadget;
