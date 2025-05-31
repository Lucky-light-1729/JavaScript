const result=[1,2,3,4,5,6,7,8,9];
const sqresult=result.map((num)=> num*num);
console.log(sqresult);

const result1=["orange","apple","banana","kiwi",];
const searchTerm = "ap";
filterresult=result1.filter((fruit)=> fruit.includes(searchTerm));
console.log(filterresult);
