
// In this file we will define a function sum and export it
// 1) export using exports object  --> use require() method to import

exports.sum = (a,b)=>{
    return (a+b);
}

exports.diff = (a,b)=>{
    return (a-b);
}

// ****************************************************************
//  2) export can be done usning simple export statements  --> use import statement while importin module

// let sum_1 = (a,b) => {return a+b}
// let diff_1 = (a,b) => {return a-b}

// export {sum_1,diff_1};


