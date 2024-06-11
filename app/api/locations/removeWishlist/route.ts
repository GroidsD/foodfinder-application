import { updateWishlist } from "@/mongoose/locations/services";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  let { locationId, userId } = await req.json();
  console.log(locationId + ' ' + userId);

  const location = await updateWishlist(locationId, userId, "remove");

  return NextResponse.json(location, { status: 200 });
}
