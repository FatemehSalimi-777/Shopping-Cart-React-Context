export const filterCategory = (products, category) => {
  if (!category) return products;

  const filteredCategory = products.filter(
    (product) => product.category === category
  );
  return filteredCategory;
};
