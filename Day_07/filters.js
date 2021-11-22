const words = ['tea', 'coffee', 'milk', 'ate', 'eat'];

const result = words.filter(function(word){
     return (word.length > 3); // true or false => only true contents will be picked when you use filter.
});

console.log(result);