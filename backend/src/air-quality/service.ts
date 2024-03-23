import { IQAirAPI } from '../iqair-api';

export async function nearestCityAirQuality(lat: number, lng: number) {
  const data = await IQAirAPI.nearestCityData(lat, lng);

  const { pollution } = data.data.current;

  return {
    Result: {
      Pollution: pollution,
    },
  };
}
