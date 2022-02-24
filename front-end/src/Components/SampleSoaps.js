import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Soap from "./Soap";
import DemoNav from "./DemoNav";

function Soaps() {
  const URL = process.env.REACT_APP_API_URL;
  const [soaps, setSoaps] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/soaps`)
      .then((response) => {
        setSoaps(response.data);
      })
      .catch((error) => console.log("catch", error));
  }, [URL]);

  const soapsDisplay = soaps.map((soap, i) => {
    return <Soap soap={soap} id={soap.id} key={i} />;
  });

  return (
    <>
      <DemoNav />
      <div>{soapsDisplay}</div>
    </>
  );
}

export default Soaps;
