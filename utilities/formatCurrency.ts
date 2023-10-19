const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

// formats the currency based on the currency and style values defined above
export function formatCurrency(price: number): string {
  return CURRENCY_FORMATTER.format(price);
}
