var mongoose = require("mongoose");
var teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desigation: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Teacher", teacherSchema);
