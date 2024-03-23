import { CityData } from './types';
import { client } from './client';
import { config } from '../config';

export async function nearestCityAirQuality(lat: number, lng: number) {
  const res = await client.get<CityData>('/nearest_city', {
    params: {
      lat,
      lon: lng,
      key: config.iqAir.key,
    },
  });

  const { pollution } = res.data.data.current;

  return {
    Result: {
      Pollution: pollution,
    },
  };
}
