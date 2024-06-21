import { Schema } from "mongoose";
import { LocationType } from "./interface";

export const LocationSchema: Schema = new Schema<LocationType>({
    id: {
        type: "Number",
        required: true,
        unique: true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    product: {
        type: "String",
        required: true,
    },
    price: {
        type: "Number",
        required: true,
    },
    location_id: {
        type: "String",
        required: true,
    },
    remain: {
        type: "Number",
        required: true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    imgURL: {
        type: "String",
        required: true,
    }
});
