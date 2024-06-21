"use server";

import { Product } from "@/custom";
import { LocationType } from "@/mongoose/locations/interface";
import locations from "@/mongoose/locations/model";
import { updateQuantity } from "@/mongoose/locations/services";

export async function updateRemain(products: Product[]) {
    for (let i = 0; i < products.length; i++) {
        let p: Product = products[i];
        let result = await updateQuantity(p.id, p.quantity);
        console.log(result);
    }      
}

