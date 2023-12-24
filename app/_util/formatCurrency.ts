const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

// formats the currency based on the currency and style values defined above - currently set to USD
export function formatCurrency(price: number): string {
  return CURRENCY_FORMATTER.format(price);
}
