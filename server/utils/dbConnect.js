import mongoose from "mongoose";
import config from "config";

async function dbConnect() {
  try {
    await mongoose.connect(
      config.get(
        "mongodb+srv://saranshtanwar:Saransh123@cluster0.ivx6ps0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      )
    );
    console.log("DB Connected Sucessfully!");
  } catch (error) {
    console.error(error);
  }
}

dbConnect();
