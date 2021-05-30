var shoesize = document.getElementById("shoe_size");
var year = document.getElementById("year");

function calc(shoesize, year) {
    result = shoesize * 2;
    result += 5;
    result *= 50;
    result -= year;
    result += 1766;
    return result;
}

function run() {
    print ("the result is : " + calc(shoesize.value, year.value));
}