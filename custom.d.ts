import { DefaultSession } from "next-auth";

export declare type FilterLocationType = {
    location_id: string | string[];
};

export declare type FilterWishlistType = {
    on_wishlist: {
        $in: string[];
    };
};

declare module "next-auth" {
    interface Session {
        user: {
            fdlst_private_userId: string;
        } & DefaultSession["user"];
    }
}

export declare type Product = {
    id: number;
    product: string;
    price: number;
    quantity: number;
    remain: number;
    imgURL: string;
}