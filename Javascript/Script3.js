function multiply(x, y) {
    return x * y;
}
console.log(multiply(3, 2));
multiply.version="v.1.0";
console.log(multiply);

function makeMultiplier(multiplier){
    var myFunc= function (x){
        return multiplier*x;
    }
    return myFunc;
};
var multiplyby3=makeMultiplier(3);
console.log(multiplyby3(10));
var doubleAll=makeMultiplier(2);
console.log(doubleAll(100));

function doOperation(x, operation){
    return operation(x);
};
var result=doOperation(5, multiplyby3);
console.log(result);

function makeMultiplier(multiplier) {
    var myFunFunc = function (x) {
      return multiplier * x;
    };
    
    return myFunFunc;
  }
  
  var operation = makeMultiplier(10);
  console.log(operation(10));
