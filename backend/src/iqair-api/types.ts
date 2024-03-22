export interface NearestCityPollution {
  status: string;
  data: Data;
}

export interface Data {
  city: string;
  state: string;
  country: string;
  location: Location;
  current: Current;
}

export interface Current {
  pollution: Pollution;
  weather: Weather;
}

export interface Pollution {
  ts: Date;
  aqius: number;
  mainus: string;
  aqicn: number;
  maincn: string;
}

export interface Weather {
  ts: Date;
  tp: number;
  pr: number;
  hu: number;
  ws: number;
  wd: number;
  ic: string;
}

export interface Location {
  type: string;
  coordinates: number[];
}
