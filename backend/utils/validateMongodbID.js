const mongoose = require('mongoose');

const validateMongodbId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) throw new Error('The ID is not Valid or Found');
};

module.exports = validateMongodbId;
