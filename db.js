import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("☑️ Connected to DB");
const handleError = (error) =>
  console.log(`❌ Error on DB Connection:  ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

// DB 스키마 참고
// export const schedules = [
//   {
//     id: 1111,
//     title: "I want some korean friends",
//     guests: 1,
//     date: "20 / 09 / 15",
//     from: "America",
//     languages: ["english", "korean"],
//     concepts: ["traditional", "food"],
//     views: 24,
//     matching: false,
//     creator: {
//       id: 1234,
//       name: "jungroLee",
//       email: "jungro@gmail.com",
//       avatar:
//         "https://avatars3.githubusercontent.com/u/59046575?s=460&u=5bac8b877d8bed091a8307a9d2d10ea6e2736fc5&v=4",
//     },
//   }
// ];
