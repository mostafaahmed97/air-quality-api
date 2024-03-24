export const nearestCityAPIResponse = {
  status: 'success',
  data: {
    city: 'Alexandria',
    state: 'Alexandria',
    country: 'Egypt',
    location: {
      type: 'Point',
      coordinates: [29.91582, 31.20176],
    },
    current: {
      pollution: {
        ts: '2024-03-22T18:00:00.000Z',
        aqius: 36,
        mainus: 'p2',
        aqicn: 12,
        maincn: 'p2',
      },
      weather: {
        ts: '2024-03-22T20:00:00.000Z',
        tp: 15,
        pr: 1017,
        hu: 57,
        ws: 3.04,
        wd: 335,
        ic: '01n',
      },
    },
  },
};
