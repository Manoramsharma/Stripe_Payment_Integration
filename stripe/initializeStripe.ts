import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Stripe | null;

const initializeStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe("pk_live_51KC3zGSCohR2z3520kgPzUXcfs7zvagP0BOH6C90T1UMkyoOjQ7TKo0VUyoylpdL0NXMdKZt7fI6GrrtCuMYc6kd00emU7PakY");
  }
  return stripePromise;
};

export default initializeStripe;
