/**
 * Estimates delivery time based on user location vs warehouse location.
 */
export const estimateDeliveryTime = (userState, userCity = "", warehouseState = process.env.WAREHOUSE_STATE || "Gujarat") => {
  const isSameCity = false;
  if (isSameCity) return "1-2 Days";
  if (userState?.toLowerCase() === warehouseState?.toLowerCase()) return "3-4 Days";
  return "5-7 Days";
};
