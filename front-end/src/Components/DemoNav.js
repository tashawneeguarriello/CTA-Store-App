import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function DemoNav() {
  return (
    <div>
      <div>
        <Link to="/soaps">🐝 BeeClean</Link>
      </div>
      <Link to="/soaps/new">
        <button> New Item</button>
      </Link>
      <h3>
        <Button variant="link">
          <Link to="/">🛍️ShopOCommerce</Link>
        </Button>
      </h3>
    </div>
  );
}
