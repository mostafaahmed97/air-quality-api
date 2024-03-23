import { AxiosError } from 'axios';
import { CityData } from './types';
import { NotFoundError } from '../error';
import { client } from './client';
import { config } from '../config';

/**
 * Return nearest city's data, using a specified set of GPS coordinates.
 */
export async function nearestCityData(lat: number, lng: number) {
  try {
    const res = await client.get<CityData>('/nearest_city', {
      params: {
        lat,
        lon: lng,
        key: config.iqAir.key,
      },
    });

    return res.data;
  } catch (error: any) {
    console.log({ response: error.response.data });

    if (
      error.response.data.status == 'fail' &&
      error.response.data.data.message == 'city_not_found'
    )
      throw new NotFoundError('City not found');
    else throw error;
  }
}
