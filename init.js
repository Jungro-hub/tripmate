import app from "./app";
import "./db";
import dotenv from "dotenv";
dotenv.config();
import "./models/Schedule";
import "./models/Comment";

const PORT = process.env.PORT || 3000;

const handleListening = () => {
  console.log(`☑️ Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
