import mongoose from "mongoose";
import config from "../config";

mongoose.set("strictQuery", true);

mongoose.connect(
    `string de conexão`
).then(()=> console.log('Connected to database'))
