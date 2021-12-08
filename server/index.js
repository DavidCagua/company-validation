import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import companyRoutes from "./routes/company.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/company", companyRoutes);

const CONNECTION_URL =
  "mongodb+srv://felipe0160:muveke15@cluster0.vilww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3001;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));

// mongoose.set("useFindAndModify", false);
