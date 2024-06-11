import { LocationType } from "@/mongoose/locations/interface";
import LocationsDetails from "./locations-details";
import { findLocationByIds } from "@/mongoose/locations/services";

async function Location({ params }: { params: { locationId: string } }): Promise<JSX.Element> {
    let locations: LocationType[] | [];

    console.log(params.locationId);
    locations = await findLocationByIds([params.locationId]);

    return (
        <div>
            {locations && locations[0] && (
                <>
                    <head>
                        <title>{`The Food Finder - Details for ${locations[0].id}`}</title>
                        <meta
                            name="description"
                            content={`The Food Finder - Details for ${locations[0].id}`}
                        />
                    </head>
                    <h1>Welcome to the Food Finder!</h1>
                    <LocationsDetails location={locations[0]} />
                </>
            )}
        </div>
    );
};


export default Location;
