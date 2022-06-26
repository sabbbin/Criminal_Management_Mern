import express from "express";
import bodyparser from 'body-parser'
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from './routes/posts.js';

const app = express();


// app.use(bodyparser.json())

app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/', postRoutes);


const Connection_url = encodeURI(
    'mongodb+srv://sabin:sabin@cluster0.gjwxg.mongodb.net/criminaldb?retryWrites=true&w=majority'
    
);
const PORT = process.env.PORT || 8001;

mongoose
  .connect(Connection_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`servering running on port${PORT}`)))
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
