import locationsModel from "./model";
import { FilterWishlistType, FilterLocationType, } from "custom";
import { QueryOptions } from "mongoose";
import { LocationType } from "./interface";
import dbConnect from "@/middleware/db-connect";


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

// export async function updateWishlist(location_id: string, user_id: string, action: string):
//     Promise<LocationType | null | {}> {
//     await dbConnect();

//     let filter = { location_id: location_id };
//     let options: QueryOptions = { upsert: true, returnDocument: "after" };
//     let update = {};
//     switch (action) {
//         case "add":
//             update = { $push: { on_wishlist: user_id } };
//             break;
//         case "remove":
//             update = { $pull: { on_wishlist: user_id } };
//             break;
//     }
//     try {
//         let result: LocationType | null = await locationsModel.findOneAndUpdate(filter,
//             update, options);
//         return result;
//     } catch (err) {
//         console.log(err);
//     }
//     return {};
// }

export async function updateQuantity(id: number, remain: number):
    Promise<LocationType | null | {}> {
    await dbConnect();

    let filter = { id: id };
    let options: QueryOptions = { upsert: true, returnDocument: "after" };
    let update = { remain };
    try {
        let result: LocationType | null = await locationsModel.findOneAndUpdate(filter,
            update, options);
        return result;
    } catch (err) {
        console.log(err);
    }
    return {};
}