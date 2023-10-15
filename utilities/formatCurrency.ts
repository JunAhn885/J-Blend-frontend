const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export function formatCurrency(price: number): String {
  return CURRENCY_FORMATTER.format(price);
}
