import { type NextApiRequest, type NextApiResponse } from "next";
import { client } from "~/utils/shopify";

const productsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const queryString = `{
        products (first: 3) {
          edges {
            node {
              id
              title
            }
          }
        }
      }`

      const {body: products} = await client.query({
        data: queryString,
      });
      
      res.json(products);
  } catch (e) {
    console.log(e.message)
    res.status(400);
  }
};

export default productsHandler;
