"use server";

import locationsModel from "./model";
import { FilterWishlistType, FilterLocationType, } from "custom";
import { LocationType } from "./interface";
import dbConnect from "@/middleware/db-connect";

import { Product } from "@/custom";
import locations from "./model";

export async function updateRemain(products: Product[]) {
    await dbConnect();
    const session = await locations.startSession();
    session.startTransaction();
    try {
        for (let i = 0; i < products.length; i++) {
            let p: Product = products[i];
            let filter = { id: p.id, remain: { $gte: p.quantity } };
            let update = p.quantity <= p.remain ? { $inc: { remain: -p.quantity } } : { $inc: { remain: p.remain } };
            let result: LocationType | null = await locationsModel.findOneAndUpdate(filter,
                update, { new: true, upsert: false, sessiopn: session });
            console.log(result);
        }
        await session.commitTransaction();
    } catch (error) {
        const errorMessage = (<Error>error).message;
        console.log("Error: " + errorMessage);
        await session.abortTransaction();
        throw error;
    } finally {
        await session.endSession();
    }
    return await products;
}

async function findLocations(filter: FilterLocationType | FilterWishlistType | {}): Promise<LocationType[] | []> {
    try {
        await dbConnect();
        let result: Array<LocationType | undefined> = await locationsModel.find(filter);
        return result as LocationType[];
    } catch (err) {
        console.log(err);
    }
    return [];
}

export async function findAllLocations(): Promise<LocationType[] | []> {
    await dbConnect();
    let filter = {};
    return await findLocations(filter);
}

export async function findLocationByIds(location_ids: string[]): Promise<LocationType[] | []> {
    let filter = { location_id: location_ids };
    return await findLocations(filter);
}

export async function onUserWishlist(user_id: string): Promise<LocationType[] | []> {
    let filter: FilterWishlistType = {
        on_wishlist: {
            $in: [user_id],
        },
    };
    return await findLocations(filter);
}

