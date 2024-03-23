import { AirQualityMeasurment } from './model';
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

export async function peakPollutionTime() {
  const peakPollution = await AirQualityMeasurment.findOne().sort({
    aqius: -1,
  });

  if (!peakPollution) return {};

  return {
    date: peakPollution.ts,
  };
}
