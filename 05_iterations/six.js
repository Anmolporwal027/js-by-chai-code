// const coding = ["js" , "ruby" , "java" , "python" , " cpp"]

// coding.forEach((item)=>{
//     console.log(item);  
// })

// const values = coding.forEach((item)=>{
//     console.log(item);  
//     // return item;  doesn't return a value
// })
// console.log(values); //for each function doesn't return a value

const myNum = [1,2,3,4,5,6,7,8,9,10]
// first way
// const values = myNum.filter((num) => num > 4)//yha arrow function ne code ko chota likhne me help kari hai 

// another way yha return keyword aayega
// const values = myNum.filter((num) => {
//     return num > 4;
// })
// console.log(values);

// we can use any of the one for each or filter to push the elements in the array
const newNum = []
myNum.forEach((item)=>{
    if(item > 4){
    newNum.push(item)
    }
})
// console.log(newNum);
 

const books = [
    {title:'Book one', genre: 'Fiction', publish: 1981 , edition : 2004 },
    {title:'Book two', genre: 'non-fiction', publish: 1992 , edition : 2008 },
    {title:'Book three ', genre: 'history', publish: 1999 , edition : 2007},
    {title:'Book four', genre: 'non-fiction', publish: 1989 , edition : 2010},
    {title:'Book five', genre: 'science', publish: 2009 , edition : 2014},
    {title:'Book six', genre: 'fiction', publish: 1987 , edition : 2010},
    {title:'Book seven', genre: 'history', publish: 1986 , edition : 1996},
    {title:'Book eight', genre: 'science', publish: 2011 , edition : 2016},
    {title: 'Book nine', genre:'Non-fiction', publish: 1981, edition:1989}
];

const userBooks = books.filter( (bk) => bk.genre ===    'history' );
// console.log(userBooks);

const userBooks2 = books.filter( (bk) => ( (bk.publish >= 1995) && (bk.genre === 'history')))
// console.log(userBooks2);

const userBooks3 = books.filter((bk) => bk.edition >= 2000 && bk.publish <= 2000)
console.log(userBooks3);
