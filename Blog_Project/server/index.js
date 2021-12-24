import express from "express"; //Our framework                                   --->New Way to Import
import cors from "cors"; //It allows us to relax the security applied to an API.
import mongoose from "mongoose"; //Connect to DB
import bodyParser from "body-parser"; //In order to get access to the post data
import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes); //starting path for all the routes

//Middleware function(s) at the path(for correct work with images and requests)
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//Connect to DB(Mongoose)
const CONNECTION_URL =
  "mongodb+srv://blog-project:blog-project123@blog-project.8g9su.mongodb.net/<dbname>?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running in Port:${PORT}!`))
  )
  .catch((error) => console.log(error.message));
