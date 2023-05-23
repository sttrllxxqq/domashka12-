const prices = {
  vegetables: {
    cabbage: 8,
    avocado: 30,
    tomato: 10
  },
  fruits: {
    grapes: 20,
    raspberry: 25,
    coconut: 50
  }
};

function getProductImage(category, product) {
  return `images/${category}/${product}.svg`;
}

function renderProductInfo(category, product, count, season) {
  const productInfoDiv = {
    innerHTML: '',
    appendChild(element) {
      this.innerHTML += element;
    }
  };

  const img = `<img src="${getProductImage(category, product)}" alt="${product}" width="100" height="100">`;

  const selectedProduct = `<p>Selected product: <b>${product}</b></p>`;

  const productCount = `<p>Count of ${product}s: <b>${count}</b></p>`;

  const selectedSeason = `<p>Selected period: <b>${season}</b></p>`;

  const selectedCategory = `<p>Selected category: <b>${category}</b></p>`;

  const finalSum = `<p>Final sum: <b>${prices[category][product] * count} UAH</b></p>`;

  productInfoDiv.innerHTML = '';
  productInfoDiv.appendChild(img);
  productInfoDiv.appendChild(selectedProduct);
  productInfoDiv.appendChild(productCount);
  productInfoDiv.appendChild(selectedSeason);
  productInfoDiv.appendChild(selectedCategory);
  productInfoDiv.appendChild(finalSum);

  console.log(productInfoDiv.innerHTML);
}

function askSeason() {
  let season = '';
  do {
    const input = prompt('Enter the season (winter or summer):');
    season = input.trim().toLowerCase();
  } while (season !== 'winter' && season !== 'summer');

  return season;
}

function askCategory() {
  let category = '';
  do {
    const input = prompt('Enter the category (vegetables or fruits):');
    category = input.trim().toLowerCase();
  } while (category !== 'vegetables' && category !== 'fruits');

  return category;
}

function askProduct(category) {
  let product = '';
  do {
    const input = prompt(`Enter a ${category} product (${Object.keys(prices[category]).join(', ')}):`);
    product = input.trim().toLowerCase();
  } while (!Object.keys(prices[category]).includes(product));

  return product;
}

function askCount() {
  let count = NaN;
  do {
    const input = prompt('Enter the count of products:');
    count = parseInt(input);
  } while (isNaN(count) || count <= 0);

  return count;
}

function startPurchase() {
  const season = askSeason();
  const category = askCategory();
  const product = askProduct(category);
  const count = askCount();

  renderProductInfo(category, product, count, season);
}

startPurchase();