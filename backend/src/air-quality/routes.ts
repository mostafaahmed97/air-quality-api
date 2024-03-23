import { AirQualityService } from '.';
import Joi from 'joi';
import { Router } from 'express';
import { ValidationError } from '../error';

const schema = Joi.object({
  lat: Joi.number().required(),
  lng: Joi.number().required(),
});

const router = Router();

router.get(
  '/nearest-city-air-quality/:lat/:lng',
  (req, res, next) => {
    const { error } = schema.validate(req.params, { abortEarly: false });

    if (error) next(new ValidationError(error.message));
    else next();
  },
  async (req, res, next) => {
    try {
      const { lat, lng } = req.params;
      const data = await AirQualityService.nearestCityAirQuality(
        Number(lat),
        Number(lng)
      );
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/peak-pollution-time', async (req, res, next) => {
  try {
    const result = await AirQualityService.peakPollutionTime();

    res.send(result);
  } catch (error) {
    next(error);
  }
});

export { router };
