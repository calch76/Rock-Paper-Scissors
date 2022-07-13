
function newFunction() {
    const sumArray = function (array) {
        let sum = 0;
        array.forEach(function (number) {
            sum += number;
        });
        return sum;
    };

    let x=sumArray([2, 2, 2]);
    console.log("x")
}

