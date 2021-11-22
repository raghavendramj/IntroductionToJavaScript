//Question:

// TODO 1: Write a function to create book details in the DB. You can mock this functionality by using a setTimeout() method.
let bookDetails = (callback) => {
    let bookId = null;
    let bookName = null;
    let bookAuthor = null;
    // create book details in DB
}

// TODO 2: Write a callback function which prints the book details to the console.
let printBookDetails = (bookId, bookName, bookAuthor) => {
    
}

//Solution:

// DONE 1: Write a function to create book details in the DB. You can mock this functionality by using a setTimeout() method.
let bookDetails = (callback) => {
  let bookId = null;
  let bookName = null;
  let bookAuthor = null;
  // create book details in DB
  setTimeout(() => {
    bookId = 1;
    bookName = "Angels and Demons";
    bookAuthor = "Dan Brown";
    callback(bookId, bookName, bookAuthor);
  }, 1000);
};

// DONE 2: Write a callback function which prints the book details to the console.
let printBookDetails = (bookId, bookName, bookAuthor) => {
  console.log(`Book id is: ${bookId}`);
  console.log(`The name of the book is: ${bookName}`);
  console.log(`The author of Angels and Demons is ${bookAuthor}`);
};


bookDetails(printBookDetails);