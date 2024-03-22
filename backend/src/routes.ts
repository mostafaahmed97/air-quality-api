import { IqAirAPI } from './iqair-api';
import Joi from 'joi';
import { Router } from 'express';

const schema = Joi.object({
  lat: Joi.number().required().min(-90).max(90),
  lng: Joi.number().required().min(-180).max(180),
});

const router = Router();

router.get(
  '/nearest-city-air-pollution/:lat/:lng',
  (req, res, next) => {
    const { error } = schema.validate(req.params, { abortEarly: false });

    if (error) next(error);
    else next();
  },
  async (req, res, next) => {
    try {
      const { lat, lng } = req.params;

      const data = await IqAirAPI.getNearestCityPollution(
        Number(lat),
        Number(lng)
      );

      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
);

export { router };
