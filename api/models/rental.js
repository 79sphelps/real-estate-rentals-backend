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
        description_1: String,
        description_2: String,
        description_3: String,
        description_4: String,
        description_5: String,
        description_6: String,
        description_7: String,
        description_8: String,
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
