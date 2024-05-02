const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary('Šikmý kostel', 'Karin Ledecká', 350, true);
addBookToLibrary('Anděl Smrti', 'Robert Bryndza', 481, false);
addBookToLibrary('Slzotvůrce', 'Erin Doom', 658, true);

let bookListHTML = '';

for (i = 0; i < myLibrary.length; i++) {
  const list = myLibrary[i];
  console.log(list);

  bookListHTML += ` <li>
<h2>${list.title}</h2>
<p>Author: ${list.author}</p>
<p>Pages: ${list.pages}</p>
<p>Status: ${list.read ? 'Read' : 'Not read'}</p>
</li>`;
}

const books = document.getElementById('library');
books.innerHTML = `<ul>${bookListHTML}</ul>`;

const buttonNewBook = document.getElementById('buttonNewBook');
const closeForm = document.getElementById('closeForm');
const formNewBook = document.getElementById('formNewBook');

buttonNewBook.addEventListener('click', () => {
  formNewBook.showModal();
});

closeForm.addEventListener('click', (event) => {
  formNewBook.close();
  event.preventDefault();
});
