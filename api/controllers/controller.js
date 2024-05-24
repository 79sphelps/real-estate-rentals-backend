const db = require("../models");
const Rental = db.Rentals;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  const Rental = new Rental({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status ? req.body.status : false,
    dueDate: req.body.dueDate,
  });

  Rental
    .save(Rental)
    .then((data) => res.status(201).send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Rental.",
      });
    });
};

exports.findAll = (req, res) => {
  // Provide API for the search by title functionality in the client.
  // const title = req.query.title;
  // var condition = title
  //   ? { title: { $regex: new RegExp(title), $options: "i" } }
  //   : {};

  console.log('---- here ----')

  // Rental.find(condition)
  Rental.find()
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.log(err)
      res
        .status(500)
        .send({
          message: err.message || "Some error occurred while fetching Rentals.",
        });
    });
};

exports.findOne = (req, res) => {
  if (!req.body)
    res.status(400).send({ message: "Search content cannot be empty" });
  const id = req.params.id;
  Rental.findById(id)
    .then((data) => {
      if (!data) res.status(404).send({ message: "Rental not found" });
      else res.status(200).send(data);
    })
    .catch((err) =>
      res
        .status(500)
        .send({ message: err.message || "Error retrieving Rental with id " + id })
    );
};

exports.findAllDone = (req, res) => {
  Rental.find({ status: true })
    .then((data) => res.status(200).send(data))
    .catch((err) =>
      res
        .status(500)
        .send({
          message: err.message || "Some error occurred during retrieval",
        })
    );
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update cannot be empty." });
  }

  console.log(req)


  const id = req.params.id;

  Rental.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot update Rental with id=${id}. Not found.` });
      } else {
        res.status(200).send({ message: "Rental was updated successfully." });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Rental with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to delete cannot be empty." });
  }

  const id = req.params.id;

  Rental.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Rental with id=${id}. Not found.`,
        });
      } else {
        res.status(200).send({ message: "Rental was deleted successfully" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Rental with id=" + id });
    });
};

exports.deleteAll = (req, res) => {
  Rental.deleteMany({})
    .then((data) =>
      res
        .status(200)
        .send({
          message: `${data.deletedCount} Rentals were deleted successfully`,
        })
    )
    .catch((err) =>
      res
        .status(500)
        .send({ message: err.message || "Error occurred while deleting Rentals" })
    );
};
