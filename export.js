// export

// standard function
// function sum(a, b) {
//     return a + b;
// }

// module.exports = {
//     sum
//  };

// Array function
// const sum = ( a, b ) => a + b; //cz it is one line no need of {}
// const sum = ( a, b ) => { return a + b; } ; //if the code has multi line of code

// module.exports = {
//     sum
// };

// no parameters
// const sum = (  ) => a + b; 

// 1 parameter
// const sum = a => a + b; 

// can also export as below
exports.sum = (a, b) => a + b;
exports.sub =(a,b) => a-b;

// console.log("Process: ", process)