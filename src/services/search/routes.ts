import { Request, Response } from "express";
import { getPlacesByName } from "./SearchController";
import { checkSearchParams } from "../../middleware/checks";
import { checkCache } from "../../middleware/checkCache";

export default [
  {
    path: "/api/v1/search",
    method: "get",
    handler: [
      checkSearchParams, checkCache,
      async ({ query }: Request, res: Response) => {
        if (typeof(query.q) == 'string') {
          const result = await getPlacesByName(query.q);
          res.status(200).send(result);
        }
      }
    ]
  }
];