
import mongoose, { model } from "mongoose";
import { LocationType } from "./interface";
import { LocationSchema } from "./schema";


const locations = mongoose.models.locations || model<LocationType>("locations", LocationSchema);
export default locations