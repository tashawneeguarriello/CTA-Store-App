import { Link } from "react-router-dom";
//import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
