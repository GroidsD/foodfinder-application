import dbConnect from "@/middleware/db-connect";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { findAllLocations } from "@/mongoose/locations/services";


export async function GET(req: NextRequest): Promise<NextResponse> {
    const locations = await findAllLocations();
    return NextResponse.json(locations, { status: 200 });
}

