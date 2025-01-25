import { useEffect, useState } from "react";
import SingleGadget from "./SingleGadget";

const AllGedgets = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("/gadget.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {product.map((product) => (
        <SingleGadget key={product.product_id} product={product} />
      ))}
    </div>
  );
};

export default AllGedgets;
