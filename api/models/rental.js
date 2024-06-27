module.exports = (mongoose) => {
  const Rental = mongoose.model(
    "rental",
    mongoose.Schema(
      {
        address: String,
        city: String,
        state: String,
        zip: String,
        price: String,
        description: String,
        images: Object,
        beds: String,
        baths: String,
        sqft: String,
        type: String, // condo
        year: String,
        heating: String, // No Data
        cooling: String, // No Data
        hoa: String, // $150mo
        parcelNumber: String
      },
      { timestamps: true },
      { collection: 'rentals' }
    )
  );

  return Rental;
};
