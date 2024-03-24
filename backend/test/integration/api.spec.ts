import { beforeAll, describe, expect, jest, test } from '@jest/globals';

import { app } from '../../src/app';
import { nearestCityAPIResponse } from '../mocks/responses.mock';
import request from 'supertest';

jest.mock('../../src/iqair-api/api', () => ({
  nearestCityData: () => nearestCityAPIResponse,
}));

beforeAll(() => {
  jest.resetModules();
  jest.resetAllMocks();
});

describe('/', () => {
  describe('GET /', () => {
    test('responds with 200 & OK', async () => {
      const response = await request(app).get('/');

      expect(response.status).toEqual(200);
      expect(response.text).toEqual('OK');
    });
  });

  describe('GET /non-existent-route', () => {
    test('responds with 404', async () => {
      const response = await request(app).get('/non-existent-route');

      expect(response.status).toEqual(404);
    });
  });
});

describe('/api', () => {
  describe('GET /nearest-city-air-quality', () => {
    test('responds with 200 & OK', async () => {
      const response = await request(app).get(
        '/api/nearest-city-air-quality/1/1'
      );

      expect(response.status).toEqual(200);
      expect(response.body).toEqual({
        Result: { Pollution: nearestCityAPIResponse.data.current.pollution },
      });
    });

    test('validates latitude is anumber', async () => {
      const response = await request(app).get(
        '/api/nearest-city-air-quality/a/1'
      );

      expect(response.status).toEqual(400);
    });

    test('validates longitude is anumber', async () => {
      const response = await request(app).get(
        '/api/nearest-city-air-quality/1/a'
      );

      expect(response.status).toEqual(400);
    });
  });
});
