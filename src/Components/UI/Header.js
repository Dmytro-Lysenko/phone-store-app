import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">All Phones</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/favorites">Favorite phones</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link>Add New Phone</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
