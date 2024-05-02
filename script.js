console.log('hello wordl');

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const addBookToLibrary = () => {
  const title = prompt('Enter the title of the book:');
  const author = prompt('Enter the author of the book:');
  const pages = parseInt(prompt('Enter the number of pages:'));
  const readStatus = prompt('Have you read this book? (yes/no)').toLowerCase();
  const read = readStatus === 'yes' ? true : false;

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

  console.log('Book added to the library!');
};

addBookToLibrary();

console.log(myLibrary);
