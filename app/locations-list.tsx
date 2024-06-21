import { LocationType } from "@/mongoose/locations/interface";
import styles from "./locations-list.module.css";
import LocationsListItem from "./locations-listitem";

interface PropsInterface {
    locations: LocationType[];
}

async function LocationsList(props: PropsInterface): Promise<JSX.Element> {
    return (
        <ul className={styles.root}>
            {props.locations.map((location) => {
                return (
                    <LocationsListItem
                        location={location}
                        key={location.location_id}
                    />
                );
            })}
        </ul>
    );
};

export default LocationsList;