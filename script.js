// פונקציה לתשלום בפייפאל
function payWithPayPal() {
    window.location.href = "https://www.paypal.com/checkoutnow"; // קישור לדף תשלום PayPal שלך
}

// פונקציה לתשלום בביט
function payWithBit() {
    alert("לשלם בביט יש לשלוח לכתובת הטלפון: 050-1234567");
    // כאן ניתן להוסיף הפנייה לאפליקציה של ביט, אם יש תמיכה
}

// פונקציה לתשלום בפייבוקס
function payWithPayBox() {
    alert("לשלם בפייבוקס יש לשלוח לכתובת: https://payboxapp.page.link/example");
    // כאן ניתן להוסיף לינק מותאם אישית
}