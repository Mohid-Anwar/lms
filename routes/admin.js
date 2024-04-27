var express = require("express");
var router = express.Router();
var Student = require("../models/student");
var Teacher = require("../models/teacher");
var Class = require("../models/class");

// Admin GET Routes
router.get("/", function (req, res, next) {
  res.send("Admin Dashboard");
});

router.get("/students", function (req, res, next) {
  Student.find()
    .exec()
    .then((student) => {
      // res.json("List Of Students");
      res.json(student);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/students/:id", function (req, res, next) {
  Student.find({ _id: req.params.id })
    .exec()
    .then((student) => {
      // res.json("One Student Deets");
      res.json(student);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/teachers", function (req, res, next) {
  Teacher.find()
    .exec()
    .then((teacher) => {
      // res.json("List Of Teachers");
      res.json(teacher);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/teachers/:id", function (req, res, next) {
  Teacher.find({ _id: req.params.id })
    .exec()
    .then((result) => {
      // res.json("One Teacher Deets");
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/classes", function (req, res, next) {
  Class.find()
    .populate("teacher")
    .populate("students.sid")
    .exec()
    .then((calsss) => {
      // res.json("List Of Class");
      res.json(calsss);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/classes/:id", function (req, res, next) {
  Class.find({ _id: req.params.id })
    .populate("teacher")
    .populate("students.sid")
    .exec()
    .then((result) => {
      // res.json("One Class deets");
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Admin POST Routes
router.post("/addstudent", function (req, res, next) {
  Student.create(req.body)
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/addteacher", function (req, res, next) {
  Teacher.create(req.body)
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/addclass", function (req, res, next) {
  Class.create(req.body)
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Admin PUT Routes

router.put("/classes/:cid/:tid", function (req, res, next) {
  Class.findOneAndUpdate({ _id: req.params.cid }, { teacher: req.params.tid })
    .then((result) => {
      res.json(result);
    })
    .then((err) => {
      res.json(err);
    });
});

router.put("/assignsttoclass/:cid/:sid", function (req, res, next) {
  Class.findOneAndUpdate(
    { _id: req.params.cid },
    {
      $push: {
        students: {
          sid: req.params.sid,
        },
      },
    }
  )
    .then((result) => {
      res.json(result);
    })
    .then((err) => {
      res.json(err);
    });
});

// Admin DELETE Routes
router.delete("/delstudent/:id", function (req, res, next) {
  Student.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .then((err) => {
      res.json(err);
    });
});

router.delete("/delteachers/:id", function (req, res, next) {
  Teacher.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .then((err) => {
      res.json(err);
    });
});

router.delete("/delclass/:id", function (req, res, next) {
  Class.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .then((err) => {
      res.json(err);
    });
});
module.exports = router;
