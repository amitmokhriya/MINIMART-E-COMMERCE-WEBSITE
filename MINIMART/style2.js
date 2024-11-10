let cart = [];
function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product);
    alert(`${productName} has been added to your cart.`);
    console.log(cart); 
}
document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', () => {
        const productName = button.previousElementSibling.previousElementSibling.textContent;
        const price = button.previousElementSibling.textContent;
        addToCart(productName, price);
    });
});
