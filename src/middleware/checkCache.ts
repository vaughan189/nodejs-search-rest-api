import { Request, Response, NextFunction } from "express";
import { RedisClient } from "../cache/redisClient";

const redisClient = new RedisClient().create();

export const checkCache = (req: Request, res: Response, next: NextFunction) => {
    const { query } = req;
    if (typeof (query.q) == 'string') {
        redisClient.get(query.q, (err, data) => {
            if (err) { res.status(500).send(err) }
            if (data != null) { res.status(200).send(JSON.parse(data)) }
            else { next() }
        });
    } else next()
};