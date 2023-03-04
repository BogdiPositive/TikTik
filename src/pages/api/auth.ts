import type { NextApiRequest, NextApiResponse } from "next";

import { allUsersQuery } from "./../../utils/queries";
import { client } from "../../utils/client";
import { resolve } from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const doc = req.body;

  console.log(doc);
  await client
    .createIfNotExists(doc)
    .then(() => {
      return res.status(200).json("Login successful");
    })
    .catch((Error) => {
      console.log(Error);
      return res.json(Error);
    });
}
