import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export const connection = () => {
  try {
    mongoose.connect(
      "mongodb+srv://xanta:jqPMGrTGwvvC3mAR@cluster0.xfkb7e5.mongodb.net/docker-test"
    );
    return true;
  } catch (error) {
    return false;
  }
};
