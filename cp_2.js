function fetchproductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
        .then(function(response) {
            return response.json();
        })
        .then(function(products) {
            products.forEach(function(product) {
                console.log(product);
            });
        })
        .catch(function(error) {
            console.error("Error fetching products:", error);
        });
}

async function fetchproductsAsync() {
    try {
        const response = await fetch("https://www.course-api.com/javascript-store-products");
        const products = await response.json();
        displayProducts(products);
        catch (error) {
            handleError(error);
        }
    }
