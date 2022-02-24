import { Link } from "react-router-dom";

//helper function that renders stars based on rating??
// if (soap.rating){
//return

function Soap({ soap, id }) {
  return (
    <div className="wrapper">
      <div className="card">
        <div>
          {/* <p> */}
          <img src={soap.image} alt="Soap Thumbnail" />
          {/* </p> */}

          <p>
            <Link style={{ color: "#66A3A3" }} to={`/soaps/${id}`}>
              {soap.name}
            </Link>
          </p>
          <p>
            <Link style={{ color: "#66A3A3" }} to={`/soaps/${id}`}>
              {soap.price}
            </Link>
          </p>
          <p className="rating">
            {soap.rating ? <span>♥</span> : <span>♡</span>}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Soap;
