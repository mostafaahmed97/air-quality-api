import { CityData, IQAirAPI } from '../iqair-api';

import { AirQualityMeasurment } from './model';

export async function nearestCityAirQuality(lat: number, lng: number) {
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
