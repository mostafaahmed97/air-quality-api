import { CityData, IQAirAPI } from '../iqair-api';

import { AirQualityMeasurment } from './model';
import { ValidationError } from '../error';

export async function nearestCityAirQuality(lat: number, lng: number) {
  if (lat < -90 || lat > 90)
    throw new ValidationError('Latitude must be in range [-90, 90]');

  if (lng < -90 || lng > 90)
    throw new ValidationError('Longitude must be in range [-180, 180]');

  const data = await IQAirAPI.nearestCityData(lat, lng);

  const { pollution } = (data as CityData).data.current;

  return {
    Result: {
      Pollution: pollution,
    },
  };
}

export async function peakPollutionTime() {
  const peakPollution = await AirQualityMeasurment.findOne().sort({
    aqius: -1,
  });

  if (!peakPollution) return {};

  return {
    date: peakPollution.ts,
  };
}
