import { LocationsAPI } from './datasources/LocationsApi';

export interface Context {
  dataSources: {
    locationsAPI: LocationsAPI;
  };
}
