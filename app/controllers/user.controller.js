const db = require("../models");
const User = db.ucd;

const Op = db.Sequelize.Op;

exports.update = (req, res) => {
  User.findOne({
    where: {
      uid: req.body.uid,
    },
  })
    .then((user) => {
      if (!user) {
        console.log(user);
        User.create({
          fullname: req.body.fullname,
          address: req.body.address,
          gender: req.body.gender,
          DOB: req.body.DOB,
          adhaar: req.body.adhaar,
          licence: req.body.licence,
          uid: req.body.uid,
        }).then(function (users) {
          if (users) {
            res.send(users);
          } else {
            res.status(400).send("Error in creating new record");
          }
        });
      } else {
        User.update(req.body, { where: { uid: req.body.uid } });
        res.send(req.body);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.remove = (req, res) => {
  User.findOne({
    where: {
      uid: req.body.uid,
    },
  }).then((user) => {
    if (!user) {
      return res.status(404).send({ message: "Data Not found." });
    }
    User.destroy({
      where: {
        uid: req.body.uid,
      },
    })
      .then((user) => {
        if (!user) {
          res.status(400).send("Failure");
        } else {
          res.status(200).send("success");
        }
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  });
};

exports.details = (req, res) => {
  // console.log(req.body);
  User.findOne({
    where: {
      uid: req.body.uid,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "No details found." });
      } else {
        // console.log(user);
        return res.status(200).send(user);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
