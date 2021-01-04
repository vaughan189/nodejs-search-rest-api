import request from "request-promise";
import { RedisClient } from "../../../cache/redisClient";
import configuration from "../../../config";

const redisClient = new RedisClient().create();

export const getPlaces = async (query: string) => {
  const key = configuration.OPEN_CAGE_DATA_KEY;
  const url = `https://api.opencagedata.com/geocode/v1/geojson?q=${query}&key=${key}&limit=20&no_annotations=1`;
  const response = await request(url);
  redisClient.setex(query, 3600, JSON.stringify(response));
  return JSON.parse(response);
};