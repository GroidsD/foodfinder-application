
import mongoose, { model } from "mongoose";
import { LocationType } from "./interface";
import { LocationSchema } from "./schema";


const locations = mongoose.models.locations ||  model<LocationType>("locations", LocationSchema);
export default locations

/*
"use client";
import mongoose, { model } from "mongoose";
import { LocationType } from "./interface";
import { LocationSchema } from "./schema";

// Register the model
const LocationModel = model<LocationType>("locations", LocationSchema);

// Export the model
export default LocationModel;

*/