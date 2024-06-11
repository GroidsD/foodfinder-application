import { findLocationByIds } from "@/mongoose/locations/services";
import { NextRequest, NextResponse } from "next/server";

/*
interface ReqContext {
    params: {
        locationId: string;
    }
}

export async function GET(req: NextRequest, context: ReqContext): Promise<NextResponse> {
    console.log(context.params.locationId);
    const location = await findLocationByIds([context.params.locationId]);
    return NextResponse.json(location, { status: 200 });
}
*/

// http://localhost:3000/api/locations/56018  -> params: '56018'
export async function GET(req: NextRequest, { params }: { params: { locationId: string } }): Promise<NextResponse> {
    console.log(params.locationId);
    const location = await findLocationByIds([params.locationId]);
    return NextResponse.json(location, { status: 200 });
}
