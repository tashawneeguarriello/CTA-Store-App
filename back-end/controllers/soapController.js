//
const express = require("express");
const { response } = require("../app");

const {
  getAllSoap,
  addNewSoap,
  getOneSoap,
  deleteSoap,
  updateSoap,
} = require("../queries/soaps");

const soaps = express.Router();

// here we use the function we wrote inside of our queries.
// we have to await it because we dont want this file to move
// on to the next lines of code without this one finishing,
//  even though we are already using await in the queries file

soaps.get("/", async (_, res) => {
  console.log("GET request to /soaps");
  //console.log(allSoap);
  const allSoap = await getAllSoap();
  if (allSoap.length === 0) {
    response.status(404).json({ error: "Server Error" });
    return;
  }
  res.status(200).json(allSoap);
});

soaps.get("/:id", async (request, response) => {
  console.log("GET to /soaps/:id");
  const { id } = request.params;
  const soap = await getOneSoap(id);
  response.status(200).json(soap);
});

soaps.post("/", async (req, res) => {
  console.log("POST to /soaps");
  const newSoap = req.body;
  console.log(newSoap);
  const soaps = await addNewSoap(newSoap);
  res.status(200).json(soaps);
});

soaps.delete("/:id", async (request, response) => {
  console.log("DELETE to /soaps/:id");
  try {
    const deletedSoap = await deleteSoap(request.params.id);
    response.status(200).json(deletedSoap);

    // return soap;
  } catch (error) {
    return error;
  }
});

soaps.put("/:id", async (request, response) => {
  console.log("PUT to /soaps/:id");
  const { id } = request.params;
  const soap = request.body;
  console.log(id);
  console.log(soap);

  try {
    const updated = await updateSoap(soap, id);

    response.status(200).json(updated);
  } catch (_) {
    response.status(500).json({ error: "server error" });
  }
});

module.exports = soaps;
