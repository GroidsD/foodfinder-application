import { Schema } from "mongoose";
import { LocationType } from "./interface";

export const LocationSchema: Schema = new Schema<LocationType>({
    id: {
        type: "String",
        required: true,
    },
    product: {
        type: "String",
        required: true,
    },
    category: {
        type: "String",
        required: true,
    },
    price: {
        type: "String",
        required: true,
    },

    location_id: {
        type: "String",
        required: true,
    }
});
