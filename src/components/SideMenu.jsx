import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";

const SideMenu = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div>
      <ul className="menu bg-base-200 rounded-box w-56">
        <NavLink to={`/category/all`}>
          <Button text={`All`} />
        </NavLink>
        {categories.map((category) => (
          <NavLink
            key={category.category}
            to={`/category/${category.category}`}
          >
            <Button text={category.category} />
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
