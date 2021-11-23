function renderCartItem(item) {
    const product = item;

    let itemCountText;
    let itemCountText = "";
    let itemCountText = itemCountText + product.count; 
    let itemCountText = itemCountText + ` × `;
    let itemCountText = itemCountText + product.price;
    let itemCountText = itemCountText + ` ₽ = `;
    let sum;
    let sum = product.count * product.price;
    let itemCountText = itemCountText + sum;
    let itemCountText = itemCountText + ` ₽`;

return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
