import { LocationType } from "@/mongoose/locations/interface";
import { findAllLocations } from "@/mongoose/locations/services";
import LocationsList from "./locations-list";

async function Home(): Promise<JSX.Element> {
    let locations: LocationType[] | [];
    try {
        locations = await findAllLocations();
    } catch (err: any) {
        throw err;
    }

    return (
        <div>
            <h1>Welcome to the Food Finder!</h1>
            <LocationsList locations={locations} />
        </div>
    );
};

export default Home;

