const db = require("../db/dbConfig.js");

// All Soap are shown
const getAllSoap = async () => {
  try {
    const allSoaps = await db.any("SELECT * FROM soaps");
    return allSoaps;
  } catch (error) {
    return error;
  }
};

const getOneSoap = async (id) => {
  try {
    const soap = await db.one("SELECT * FROM soaps WHERE id=$1", id);
    return soap;
  } catch (error) {
    return error;
  }
};

const deleteSoap = async (id) => {
  try {
    const deletedSoap = await db.one(
      "DELETE FROM soaps WHERE id=$1 RETURNING *",
      id
    );
    return deletedSoap;
  } catch (error) {
    return error;
  }
};

const addNewSoap = async (soap) => {
  try {
    const {
      name,
      smell,
      ingredients,
      description,
      type,
      price,
      adult,
      baby,
      featured,
      rating,
      image,
    } = soap;
    const newSoap = await db.one(
      "INSERT INTO soaps (name, smell, ingredients,description, type, price, adult, baby, featured, rating, image) VALUES($1, $2, $3, $4, $5, $6, $7, $8,$9, $10, $11) RETURNING *",
      [
        name,
        smell,
        ingredients,
        description,
        type,
        price,
        adult,
        baby,
        featured,
        rating,
        image,
      ]
    );
    return newSoap;
  } catch (error) {
    return error;
  }
};

const updateSoap = async (soap, id) => {
  try {
    const {
      name,
      smell,
      ingredients,
      description,
      type,
      price,
      adult,
      baby,
      featured,
      rating,
      image,
    } = soap;
    const changedSoap = await db.one(
      "UPDATE soaps SET name=$1, smell=$2, ingredients=$3,description=$4,type=$5, price=$6, adult=$7, baby=$8,featured=$9, rating=$10, image=$11 WHERE id=$12 RETURNING *",
      [
        name,
        smell,
        ingredients,
        description,
        type,
        price,
        adult,
        baby,
        featured,
        rating,
        image,
        id,
      ]
    );
    return changedSoap;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSoap,
  getOneSoap,
  deleteSoap,
  addNewSoap,
  updateSoap,
};
