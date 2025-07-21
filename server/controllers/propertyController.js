import PropertyModel from "../models/Property.js";

export const addProperty = async (req, res) => {
  try {
    if (req.user.role !== "landlord") {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const property = await PropertyModel.create(req.body);
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
