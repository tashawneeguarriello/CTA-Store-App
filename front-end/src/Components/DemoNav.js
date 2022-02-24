import { Link } from "react-router-dom";
export default function DemoNav() {
  return (
    <nav className="NavTwo">
      <div>
        <Link to="/soaps">🐝 BeeClean</Link>
      </div>
      <Link to="/soaps/new">
        <button>Add A Soap </button>
      </Link>
      <h3>
        <Link to="/">🛍️ShopOCommerce</Link>
      </h3>
    </nav>
  );
}
