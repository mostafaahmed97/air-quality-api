import { AirQualityMeasurment } from '../db/model';
import { IqAirAPI } from '../iqair-api';
import cron from 'node-cron';

async function pollParisData() {
  console.log('--> Executing CRON job...');

  try {
    const parisCoords = { lat: 48.856613, lng: 2.352222 };

    const result = await IqAirAPI.nearestCityAirQuality(
      parisCoords.lat,
      parisCoords.lng
    );

    const airQuality = result.Result.Pollution;

    const measurment = new AirQualityMeasurment({
      ...airQuality,
      recordedAt: Date.now(),
    });

    await measurment.save();

    console.log('--> CRON done, measurement saved');
  } catch (error) {
    console.log('--> Error while executing cron');
    console.error({ error });
  }
}

export function scheduleCronJobs() {
  cron.schedule('* * * * *', pollParisData);
}
