import mongoose from "mongoose";

const meetupsModel = new mongoose.Schema({
  title: String,
  image: String,
  address: String,
  description: String,
});
export const Meetup =
  mongoose.models.meetup || mongoose.model("meetup", meetupsModel);
