import { NearestCityPollution } from './types';
import { client } from './client';
import { config } from '../config';

export async function getNearestCityPollution(lat: number, lng: number) {
  const res = await client.get<NearestCityPollution>('/nearest_city', {
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
