const ArrayMethods = [
    {
      "method":"Array.prototype.concat()",
      "syntax":"var array1 = ['a', 'b', 'c']",
      "syntax1":"var array2 = ['d', 'e', 'f']",
      "syntax2":"console.log(array1.concat(array2)); // ['a', 'b', 'c', 'd', 'e', 'f']",
      "parameter":"Arrays and/or values to concatenate into a new array.",
      "return":"A new Array instance.",
      "summary":"The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array."
    },
    {
      "method":"Array.prototype.subArray()",
      "syntax":"let str = 'JsMethods'",
      "syntax1":"str.subArray(0, 2);",
      "syntax2":" // 'Js'",
      "parameter":"Start index and End index.",
      "return":"A new Array with specified part of provided Array.",
      "summary":"subArray() method takes out a part from the provided Array."
    },
    {
      "method":"Array.prototype.every()",
      "syntax":"var arr = [5, 8, 3, 7, 2]",
      "syntax1":"arr.every((elm) => elm > 0);",
      "syntax2":" // true - all array element is > 0.",
      "parameter":"callback(element, index, array), thisArg",
      "return":"Boolean, true if the callback function returns a truthy value for every array element. Otherwise, false.",
      "summary":"The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. "
    },
    {
      "method":"Array.prototype.filter()",
      "syntax":"var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];",
      "syntax1":"const result = words.filter(word => word.length > 6);",
      "syntax2":"console.log(result); // ['exuberant', 'destruction', 'present']",
      "parameter":"callback(element, index, array), thisArg(optional - value to use as 'this' when executing callback)",
      "return":"A new array with the elements that pass the test.",
      "summary":"The filter() method creates a new array with all elements that pass the test implemented by the provided function."
    },
    {
      "method":"Array.prototype.forEach()",
      "syntax":"var array1 = ['a', 'b', 'c'];",
      "syntax1":"array1.forEach(elm => console.log(elm));",
      "syntax2":"// a, b, c",
      "parameter":"callback(element, index, array), thisArg(optional - value to use as 'this' when executing callback)",
      "return":"Undefined - Does not return anything exept undefined.",
      "summary":"The forEach() method executes a provided function once for each array element."
    },
    {
      "method":"Array.prototype.map()",
      "syntax":"var array1 = [1, 4, 9, 16];",
      "syntax1":"const map1 = array1.map(x => x * 2);",
      "syntax2":"console.log(map1); // [2, 8, 18, 32]",
      "parameter":"callback(element, index, array), thisArg(optional - value to use as 'this' when executing callback)",
      "return":"A new array with each element being the result of the callback function.",
      "summary":"The map() method creates a new array with the results of calling a provided function on every element in the calling array."
    },
    {
      "method":"Array.prototype.pop()",
      "syntax":"var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];",
      "syntax1":"console.log(plants.pop());",
      "syntax2":"// 'tomato'",
      "parameter":"Does not takes any parameter.",
      "return":"The removed element from the array; undefined if the array is empty.",
      "summary":"The pop() method removes the last element from an array and returns that element. This method changes the length of the array."
    },
    {
      "method":"Array.prototype.push()",
      "syntax":"var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];",
      "syntax1":"console.log(plants.push('apple'));",
      "syntax2":"// 4 - returns new length of array.",
      "parameter":"The elements to add to the end of the array.",
      "return":"The new length property of the object upon which the method was called.",
      "summary":"The push() method adds one or more elements to the end of an array and returns the new length of the array."
    },
    {
      "method":"Array.prototype.reduce()",
      "syntax":"const array1 = [1, 2, 3, 4];;",
      "syntax1":"const reducer = (acc, elm) => acc + elm;",
      "syntax2":"console.log(array1.reduce(reducer)); // 10",
      "parameter":"callback(accumulator, element, index, array), initial Value",
      "return":"The single value that results from the reduction.",
      "summary":"The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value."
    },
    {
      "method":"Array.prototype.reverse()",
      "syntax":"var array1 = ['one', 'two', 'three'];",
      "syntax1":"var reversed = array1.reverse(); ",
      "syntax2":"// ['three', 'two', 'one']",
      "parameter":"Does not takes any parameter.",
      "return":"A reversed array.",
      "summary":"The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first."
    },
    {
      "method":"Array.prototype.slice()",
      "syntax":"var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];",
      "syntax1":"console.log(animals.slice(2, 4));",
      "syntax2":"['camel', 'duck']",
      "parameter":"begin index, end index",
      "return":"A new array containing the extracted elements.",
      "summary":"The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included)."
    },
    {
      "method":"Array.prototype.splice()",
      "syntax":"var months = ['Jan', 'March', 'April', 'June'];",
      "syntax1":"months.splice(1, 0, 'Feb');",
      "syntax2":"console.log(months) // ['Jan', 'Feb', 'March', 'April', 'June']",
      "parameter":"begin index, deleteCount (how many elements to delete from begin index)",
      "return":"An array containing the deleted elements.",
      "summary":"The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements."
    }
  ]
  
  export default ArrayMethods;