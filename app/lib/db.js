const { username, password } = process.env;
export const connectionStr =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@cluster0.kqrcmsv.mongodb.net/MeetupDB?retryWrites=true&w=majority";
