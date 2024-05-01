function getProductPrice() {
  const productPriceElement = document.getElementById("product-price");
  const priceString = productPriceElement?.textContent?.replace(",", ".");
  const price = priceString ? parseFloat(priceString) * 100 : 0; // Convert to cents

  return price;
}

export default getProductPrice;
