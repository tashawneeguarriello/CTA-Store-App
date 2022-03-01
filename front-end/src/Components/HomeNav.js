import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";

export default function HomeNav() {
  return (
    <nav className="Nav">
      <div>
        <Button variant="link">
          {" "}
          <Link to="/">🛍️ShopOCommerce</Link>
        </Button>
      </div>
      <h3>
        <Button variant="link">
          <Link to="/soaps">DemoShop</Link>
        </Button>
      </h3>
      <h3></h3>
    </nav>
  );
}
