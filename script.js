function buyNow(productName, price) {
    alert(`בחרת לקנות "${productName}" במחיר ${price} ש"ח. מעביר לתשלום...`);
    window.location.href = `https://www.paypal.com/paypalme/YOUR_PAYPAL_LINK/${price}`;
}