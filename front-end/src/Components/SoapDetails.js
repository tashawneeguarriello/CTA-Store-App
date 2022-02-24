import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import DemoNav from "./DemoNav";

function SoapDetails() {
  const URL = process.env.REACT_APP_API_URL;
  const [soap, setSoap] = useState({});
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${URL}/soaps/${id}`)
      .then((response) => setSoap(response.data))
      .catch((error) => console.warn(error));
  }, [URL, id]);

  const handleDelete = () => {
    axios
      .delete(`${URL}/soaps/${id}`)
      .then(() => navigate(`/soaps`))
      .catch((error) => console.warn(error));
  };

  return (
    <div className="showNavigation">
      <DemoNav />
      <div>
        <img className="image" src={soap.image} alt="Soap"></img>
      </div>
      <h4>{soap.name} </h4>Rating<h3>{soap.rating}</h3>Price
      <h3>{soap.price}</h3>
      Smell<h3>{soap.smell}</h3>
      Ingredients<h3>{soap.ingredients}</h3>
      Description<h3>{soap.description}</h3>
      Type<h3>{soap.type}</h3>
      Good for Adults<h3>{soap.adult ? "true" : "false"}</h3>
      Good for Baby<h3>{soap.baby ? "true" : "false"}</h3>
      Is this a featured item?<h3>{soap.baby ? "true" : "false"}</h3>
      <div>
        {" "}
        <Link to={"/soaps"}>
          <button
            style={{
              color: "white",
            }}
          >
            Back
          </button>
        </Link>
      </div>
      <br />​
      <div>
        <div>
          {" "}
          <button type="button" className="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
        <br />​
      </div>
      <div>
        <div>
          {" "}
          <Link to={`/soaps/${id}/edit`}>
            <button
              style={{
                color: "white",
              }}
              type="button"
              className="button"
            >
              Edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SoapDetails;
