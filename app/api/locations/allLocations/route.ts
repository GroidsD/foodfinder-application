import { findAllLocations } from "@/mongoose/locations/services";
import { NextResponse, NextRequest } from "next/server";


export async function GET(req: NextRequest): Promise<NextResponse> {
    let locations = await findAllLocations();

    return NextResponse.json(locations, { status: 200 });
}


