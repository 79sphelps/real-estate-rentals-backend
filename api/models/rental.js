module.exports = (mongoose) => {
  const Rental = mongoose.model(
    "rental",
    mongoose.Schema(
      {
        // title: String,
        // description: String,
        // status: Boolean,
        // dueDate: String,
        address: String,
        city: String,
        state: String,
        zip: String,
        rent: String,
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
