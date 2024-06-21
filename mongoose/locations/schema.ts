import { Schema } from "mongoose";
import { LocationType } from "./interface";

export const LocationSchema: Schema = new Schema<LocationType>({
    id: {
        type: "number",
        required: true,
    },
    product: {
        type: "String",
        required: true,
    },
    price: {
        type: "number",
        required: true,
    },
    location_id: {
        type: "String",
        required: true,
    },
    remain: {
        type: "number",
        required: true,
    },
    imgURL: {
        type: "string",
        required: true,
    }
});
