import HomeNav from "../Components/HomeNav";

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
      <button>Get Started</button>
    </div>
  );
}

export default Home;
