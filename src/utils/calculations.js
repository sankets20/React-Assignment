export const calculateMaterial = (qty, price) => {
  const totalPrice = qty * price;
  const tax = totalPrice * 0.1;
  const totalAmount = totalPrice + tax;

  return { totalPrice, tax, totalAmount };
};

export const calculateProductTotal = materials =>
  materials.reduce((sum, m) => sum + m.totalAmount, 0);
