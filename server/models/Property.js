import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  landlordId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rent: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["available", "occupied", "maintenance"],
    default: "available",
  },
});

const Property = mongoose.model("Property", propertySchema);

export default Property;
