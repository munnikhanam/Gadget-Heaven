import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleGadget from "../components/SingleGadget";
const AllGedgets = () => {
  const { category } = useParams();
  console.log(category);
  const data = useLoaderData();
  const [allGadget, setallGadget] = useState([]);
  useEffect(() => {
    const remaingGadgets = [...data].filter(
      (gadget) => gadget.category === category
    );
    setallGadget(remaingGadgets);
  }, [data, category]);
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {category === "all"
        ? data.map((gadget) => <SingleGadget key={gadget.id} gadget={gadget} />)
        : allGadget.map((gadget) => (
            <SingleGadget key={gadget.id} gadget={gadget} />
          ))}
    </div>
  );
};

export default AllGedgets;
