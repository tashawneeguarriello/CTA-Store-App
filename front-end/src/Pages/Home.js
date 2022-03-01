import HomeNav from "../Components/HomeNav";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <nav>
        <HomeNav />
      </nav>
      <h1>
        <strong>Sell online</strong>
      </h1>
      <h1>
        {" "}
        <strong>with us</strong>
      </h1>
      <h3>
        <Link to="/newseller/form">
          <button>GetStarted</button>
        </Link>
      </h3>
    </div>
  );
}

export default Home;
