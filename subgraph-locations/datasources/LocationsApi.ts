import { locations } from './locations_data.json';
import { DataSource } from 'apollo-datasource';

export class LocationsAPI extends DataSource {
  getAllLocations() {
    return locations;
  }

  getLocation(id: string) {
    return locations.find((l) => l.id === id);
  }
}
