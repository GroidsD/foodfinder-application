import { LocationType } from "@/mongoose/locations/interface";
import styles from "./locations-listitem.module.css";
import Link from "next/link";

interface PropsInterface {
  location: LocationType;
}

async function LocationsListItem(props: PropsInterface): Promise<JSX.Element> {
  const location = props.location;
  return (
    <>
      {location && (
        <li className={styles.root}>
          <Link href={`/locations/${location.location_id}`}>
            <h2>
              {location.id}
              <small className={styles.details}>
                {location.category} in {location.price}
              </small>
            </h2>
          </Link>
        </li>
      )}
    </>
  );
}

export default LocationsListItem;

