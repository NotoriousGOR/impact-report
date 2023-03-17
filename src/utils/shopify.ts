import "@shopify/shopify-api/adapters/node";
import { shopifyApi, LATEST_API_VERSION } from "@shopify/shopify-api";
import { env } from "~/env.mjs";

const shopify = shopifyApi({
  apiKey: env.SHOPIFY_API_KEY,
  // Note: this is the API access token, NOT the API Secret Key due to this being a custom app
  apiSecretKey: env.SHOPIFY_ADMIN_API_TOKEN,
  scopes: env.SCOPES.split(","),
  hostName: env.NGROK_URL,
  apiVersion: LATEST_API_VERSION,
  isEmbeddedApp: false,
  isCustomStoreApp: true,
});

const session = shopify.session.customAppSession(env.SHOP);

export const client = new shopify.clients.Graphql({ session });
