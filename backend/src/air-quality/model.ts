import { AirQuality } from '../iqair-api';
import mongoose from 'mongoose';

interface IAirQualityMeasurment extends AirQuality {
  savedAt: Date;
}

const schema = new mongoose.Schema<IAirQualityMeasurment>({
  ts: { type: Date, required: true },
  aqius: { type: Number, required: true },
  mainus: { type: String, required: true },
  aqicn: { type: Number, required: true },
  maincn: { type: String, required: true },
  savedAt: { type: Date, required: true },
});

schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export const AirQualityMeasurment = mongoose.model<IAirQualityMeasurment>(
  'AirQualityMeasurment',
  schema
);
