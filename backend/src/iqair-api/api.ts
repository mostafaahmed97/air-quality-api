import { CityData } from './types';
import { client } from './client';
import { config } from '../config';

/**
 * Return nearest city's data, using a specified set of GPS coordinates.
 */
export async function nearestCityData(lat: number, lng: number) {
  const res = await client.get<CityData>('/nearest_city', {
    params: {
      lat,
      lon: lng,
      key: config.iqAir.key,
    },
  });

  return res.data;
}
