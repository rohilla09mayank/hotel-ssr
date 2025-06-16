export function formatCurrency(value) {
  const newValue = value * 20;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(newValue);
}
