// 1
function calculateArea(width, height) {
    return width * height;
}
var result = calculateArea(5, 10);
console.log("Площа:", result);

// 2
var calculateArea = function(width, height) {
    return width * height;
};

var result = calculateArea(5, 10);
console.log("Площа:", result);

// 3

var calculateArea = (width, height) => width * height;

// Виклик функції
var result = calculateArea(5, 10);
console.log("Площа:", result);
