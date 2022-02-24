import { Link } from "react-router-dom";
{
  /* <button>
        <Link to="/songs/new">Add a Song</Link>
      </button> */
}

//import { Button, Card } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
//import images.jpg
export default function DemoNav() {
  return (
    // how do I link the Shopology word to render the home page?
    <nav className="NavTwo">
      <div>
        {/* </div><img src='{logo} alt="Logo" />; */}
        {/* <img src='./images.jpg' width={182} height={64}</nav>' */}
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
