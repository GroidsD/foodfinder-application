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
            let result: LocationType | null = await locations.findOne({ id: p.id});
            if (! result)                 
                throw new Error("Coffee " + p.product + " is not found.", { cause: {id : p.id} });            

            if (result.remain < p.quantity) {
                throw new Error("Coffee " + p.product + " is not in sufficient quantity to sell.", { cause: {id : p.id, product: p.product} });
            }
            
            // update
            result = await locations.findOneAndUpdate( {id : p.id}, { remain: result.remain - p.quantity}, { new: true, session: session});
            
            console.log("Updated: " + result);
        }
        await session.commitTransaction();
    } catch (error) {
        if (error instanceof Error) {
            const cause: {id: number, product: string} = <{id: number, product: string}>error.cause;
            console.log("Error: " + error.message + ", id: " + cause.id + ", product: " + cause.product);
        } else
            console.log("Error: " + error);
        await session.abortTransaction();
        throw error;
    } finally {
        await session.endSession();
    }    
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

