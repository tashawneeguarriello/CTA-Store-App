import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DemoNav from "./DemoNav";

function NewSoapForm() {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const [soap, setSoap] = useState({
    name: "",
    smell: "",
    price: "",
    ingredients: "",
    description: "",
    type: "",
    adult: false,
    baby: false,
    featured: false,
    image: "",
  });

  const handleTextChange = (event) => {
    console.log(event.target.value);
    setSoap({ ...soap, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${URL}/soaps`, soap).then((res) => {
      console.log(res);
      navigate(`/soaps/${res.data.id}`);
    });
  };

  // const handleCheckboxChange = () => {
  //   setSoap({ ...soap, rating: !soap.rating });
  // };

  return (
    <>
      <DemoNav />
      <div className="newForm">
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
            type="number"
            min="0"
            max="5"
            onChange={handleTextChange}
          />
          <label htmlFor="image">Image</label>
          <input
            id="image"
            value={soap.image}
            type="text"
            onChange={handleTextChange}
          />
          {/* <label htmlFor="image"></label>
          <input
            id="image"
            value={soap.image}
            type="text"
            onChange={handleTextChange}
          /> */}
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
          {/* <label htmlFor="type">Type</label>
          <input
            id="type"
            value={soap.type}
            type="text"
            onChange={handleTextChange}
          /> */}
          <label htmlFor="adult">Adult</label>
          <input
            id="adult"
            type="checkbox"
            onChange={handleTextChange}
            checked={soap.adult}
          />
          <label htmlFor="baby">Baby</label>
          <input
            id="baby"
            type="checkbox"
            onChange={handleTextChange}
            checked={soap.baby}
          />
          <label htmlFor="featured">Featured</label>
          <input
            id="featured"
            type="checkbox"
            onChange={handleTextChange}
            checked={soap.featured}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default NewSoapForm;
