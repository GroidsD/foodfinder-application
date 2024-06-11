import { findAllLocations, findLocationByIds } from "@/mongoose/locations/services";
import { NextResponse, NextRequest } from "next/server";


export async function GET(req: NextRequest): Promise<NextResponse> {
    const { searchParams } = new URL(req.url);
    const locationIds: string[] = searchParams.getAll("ids");

    let locations = await findLocationByIds(locationIds);

    return NextResponse.json(locations, { status: 200 });
}



