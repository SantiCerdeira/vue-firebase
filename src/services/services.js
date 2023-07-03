import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase.js";

export async function getPricingData() {
  const pricingData = [];
  const pricingCollection = collection(db, "services");
  const pricingSnapshot = await getDocs(pricingCollection);
  pricingSnapshot.forEach((doc) => {
    const pricing = doc.data();
    pricingData.push(pricing);
  });
  return pricingData;
}