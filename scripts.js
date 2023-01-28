let greeting = "Howdy";
let userName = "Greg";
let message = "Let me check your order:";
let welcome = greeting+ " " + userName + ", " + message;


let sign = "\"Thank you for being my everything\"";
let tiles = sign.length;
let subTotal = tiles * 5;
let shipping = 11;
let grandTotal = subTotal + shipping;

const defaultSanitizer = new Sanitizer();  // Default sanitizer — for removing potentially-malicious code (don't use .innerHTML);

document.getElementById("greeting").setHTML(welcome, {sanitizer: defaultSanitizer}); 

document.getElementById("userSign").setHTML(sign, {sanitizer: defaultSanitizer});

document.getElementById("tiles").setHTML(tiles, {sanitizer: defaultSanitizer});

document.getElementById("subTotal").setHTML("$" + subTotal, {sanitizer: defaultSanitizer});

document.getElementById("shipping").setHTML("$" + shipping, {sanitizer: defaultSanitizer});

document.getElementById("grandTotal").setHTML("$" + grandTotal, {sanitizer: defaultSanitizer});