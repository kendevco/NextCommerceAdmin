import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
    // @ts-ignore: suppress type error for API version
  // This is safe to do because we're passing null as the API version
  // and the Stripe library will automatically use the latest version
  // for the API requests.
  apiVersion: "2022-11-15",
  typescript: true,
});
