import { Link } from "react-router-dom";

export default function HomeNav() {
  return (
    //how do I link the Shopology word to render the home page?
    <nav className="Nav">
      <div>
        <Link to="/soaps">DemoShop</Link>
      </div>
      <h3>
        <Link to="/">🛍️ShopOCommerce</Link>
      </h3>
      <h3></h3>
    </nav>
  );
}
