const getAllViolets = require("./getAllViolets");
const addViolet = require("./addViolet");
const getVioletsByOwner = require("./getVioletsByOwner");
const getVioletById = require("./getVioletById");
const updateVioletById = require("./updateVioletById");
const removeVioletById = require("./removeVioletById");
const updateVioletActiveById = require("./updateVioletActiveById");

module.exports = {
  getAllViolets,
  addViolet,
  getVioletsByOwner,
  getVioletById,
  updateVioletById,
  removeVioletById,
  updateVioletActiveById,
};
