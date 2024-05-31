module.exports = (mongoose) => {
    const GeneralMessage = mongoose.model(
      "generalMessage",
      mongoose.Schema(
        {
          name: String,
          email: String,
          phone: String,
          message: String
        },
        { timestamps: true },
        { collection: 'generalMessages' }   // mongoose coerces to 'generalmessages' in db
      )
    );
  
    return GeneralMessage;
  };
  