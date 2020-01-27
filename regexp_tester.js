const str = 'table football';

const regex = RegExp('foo*');
const globalRegex = RegExp('foo*','g');

document.getElementById("input1").value = regex;//Now you get the js variable inside your form element
document.getElementById("input2").value = globalRegex;//Now you get the js variable inside your form element
document.getElementById("output").value = globalRegex.test(str);//Now you get the js variable inside your form element

console.log(regex.test(str));
// expected output: true

console.log(regex.test(str));
// expected output: true

console.log(globalRegex.lastIndex);
// expected output: 0

console.log(globalRegex.test(str));
// expected output: true

console.log(globalRegex.lastIndex);
// expected output: 9

console.log(globalRegex.test(str));
// expected output: false

