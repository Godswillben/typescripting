// // type alias
// type Combinable = number | string
// type ConversionDescription = "as-text" | "as-number"


// function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescription){
//     let result;
//     if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === "as-number"){
//          result = +input1 + +input2
//     }else{
//         result = input1.toString() + input2.toString()
//     }
//     return result;
//     // if (resultConversion == 'as-number'){
//     //     return +result
//     // }else{
//     // return result.toString;
//     // }
// }

// const combinedAges = combine(20, 20, 'as-number')
// console.log(combinedAges)

// const combinedStringAges = combine('20', '30', 'as-number')
// console.log(combinedStringAges)

// const combinedNames = combine(20, 20, 'as-number')
// console.log(combinedNames)
