function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
        .then(function(response) {
            return response.json();
        })
        .then(function(products) {
            products.forEach(function(product) {
                console.log(product.fields.name);
            });
        })
        .catch(function(error) {
            console.error("Error fetching products:", error);
        });
}

async function fetchProductsAsync() {
    try {
        const response = await fetch("https://www.course-api.com/javascript-store-products");
        const products = await response.json();
        displayProducts(products);
    }
        catch (error) {
            handleError(error);
        }
    }

function displayProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML = "";
    products.slice(0, 5).forEach(function(product) {
        const card = document.createElement("div");
        card.classList.add("product-card");
        const name = product.fields.name;
        const image = product.fields.image[0].url;
        const price = product.fields.price;

        card.innerHTML = `
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p>Price: $${(price / 100).toFixed(2)}</p>
        `;
        container.appendChild(card);
    });
}

function handleError(error) {
    console.error(`An error has occurred: ${error.message}`);
}

fetchProductsThen();
fetchProductsAsync();