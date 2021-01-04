import redis from "redis";
import configuration from "../config";

export class RedisClient {
    redisPort: number;

    constructor() {
        this.redisPort = parseInt(<string>configuration.REDIS_PORT, 10) || 6379;
    }

    public create() {
        return redis.createClient(this.redisPort);
    }
}