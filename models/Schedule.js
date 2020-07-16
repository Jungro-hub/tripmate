import mongoose from "mongoose";

const ScheduleSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: "ID is required",
  },
  title: {
    type: String,
    required: "Schedule title is required",
  },
  guests: {
    type: Number,
    required: "Number of guests is required",
  },
  date: {
    type: Date,
    required: "Date of travel schedule is required",
  },
  from: String,
  languages: {
    type: String,
    required: "One or more using languages is required",
  },
  concepts: {
    type: String,
    required: "One or more desired travel concept is required",
  },
  views: {
    type: Number,
    default: 0,
  },
  matching: Boolean,

  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const model = mongoose.model("Schedule", ScheduleSchema);
export default model;
