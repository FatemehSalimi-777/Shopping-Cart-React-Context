export const sumItems = (products) => {
  const itemsCounter = products.reduce(
    (counter, product) => counter + product.quantity,
    0
  );
  const total = products
    .reduce( (total,product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  return { itemsCounter: itemsCounter, total: total };
};
