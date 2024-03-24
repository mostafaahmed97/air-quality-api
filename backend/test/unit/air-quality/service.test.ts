import { beforeAll, describe, expect, test } from '@jest/globals';

import { AirQualityService } from '../../../src/air-quality';
import { jest } from '@jest/globals';
import { nearestCityAPIResponse } from '../../mocks/responses.mock';

jest.mock('../../../src/iqair-api/api', () => ({
  nearestCityData: () => nearestCityAPIResponse,
}));

describe('Air Quality Service', () => {
  beforeAll(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  describe('getting nearest city air data', () => {
    test('latitude values out of range are validated', () => {
      expect(async () => {
        await AirQualityService.nearestCityAirQuality(91, 0);
      }).rejects.toThrow('Latitude must be in range [-90, 90]');
    });

    test('longitude values out of range are validated', () => {
      expect(async () => {
        await AirQualityService.nearestCityAirQuality(0, 181);
      }).rejects.toThrow('Longitude must be in range [-180, 180]');
    });

    test('extracts air quality data from api response', async () => {
      const res = await AirQualityService.nearestCityAirQuality(10, 10);

      expect(res).toMatchObject({
        Result: {
          Pollution: nearestCityAPIResponse.data.current.pollution,
        },
      });
    });
  });
});
