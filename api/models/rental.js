module.exports = (mongoose) => {
  const Rental = mongoose.model(
    "rental",
    mongoose.Schema(
      {
        address: String,
        city: String,
        state: String,
        zip: String,
      },
      { timestamps: true }
    )
  );

  return Rental;
};
