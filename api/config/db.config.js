module.exports = {
  // "mongodb://localhost:27017/phelpsRentals",
  url: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.po6aaqm.mongodb.net/phelpsRentals?retryWrites=true&w=majority`
};
