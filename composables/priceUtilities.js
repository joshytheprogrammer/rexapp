export const usePriceUtilities = () => {
  function formatPrice(price) {
    // const NGN_SYMBOL = "₦";
    const formatter = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    });
    return formatter.format(price);
  }  

  return {
    formatPrice
  }
}