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
