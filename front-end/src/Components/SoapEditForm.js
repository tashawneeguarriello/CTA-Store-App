import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import DemoNav from "./DemoNav";

const SoapEditForm = () => {
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  const [soap, setSoap] = useState({
    name: "",
    smell: "",
    ingredients: "",
    description: "",
    type: "",
    price: "",
    adult: false,
    baby: false,
    featured: false,
    rating: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get(`${URL}/soaps/${id}`)
      .then((response) => {
        setSoap(response.data);
      })
      .catch((error) => {
        navigate("*");
      });
  }, [URL, id, navigate]);

  const handleTextChange = (event) => {
    console.log(soap);
    setSoap({ ...soap, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${URL}/soaps/${id}`, soap).then((res) => {
      navigate(`/soaps/${id}`);
    });
  };
  console.log(soap);
  return (
    //<DemoNav />
    <div className="editForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={soap.name}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="smell">Smell</label>
        <input
          id="smell"
          value={soap.smell}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="price">Price</label>
        <input
          id="price"
          value={soap.price}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          value={soap.rating}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="image">Image</label>
        <input
          id="image"
          value={soap.image}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="image"></label>
        <input
          id="image"
          value={soap.image}
          type="text"
          onChange={handleTextChange}
        />
        {/* <label htmlFor="ingredients">Ingredients</label>
        <input
          id="ingredients"
          value={soap.ingredients}
          type="text"
          onChange={handleTextChange}
        /> */}
        <label htmlFor="description">Description</label>
        <input
          id="description"
          value={soap.description}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="type">Type</label>
        <input
          id="type"
          value={soap.type}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="type">Type</label>
        <input
          id="type"
          value={soap.type}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="adult">Adult</label>
        <input
          id="adult"
          type="checkbox"
          //onChange={handleCheckboxChange}
          checked={soap.adult}
        />
        <label htmlFor="baby">Baby</label>
        <input
          id="baby"
          type="checkbox"
          // onChange={handleCheckboxChange}
          checked={soap.baby}
        />
        <label htmlFor="featured">Featured</label>
        <input
          id="featured"
          type="checkbox"
          //onChange={handleCheckboxChange}
          checked={soap.featured}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
export default SoapEditForm;
