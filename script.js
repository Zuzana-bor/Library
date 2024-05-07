const myLibrary = [];

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return [this.title, this.author, this.pages, this.read];
  };
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBook();
}

addBookToLibrary('Šikmý kostel', 'Karin Ledecká', 350, true, 1);
addBookToLibrary('Anděl Smrti', 'Robert Bryndza', 481, false, 2);
addBookToLibrary('Slzotvůrce', 'Erin Doom', 658, true, 3);

function displayBook(title, author, pages, read) {
  let bookListHTML = '';

  for (i = 0; i < myLibrary.length; i++) {
    const list = myLibrary[i];

    bookListHTML += ` <li>
<h2>${list.title}</h2>
<p>Author: ${list.author}</p>
<p>Pages: ${list.pages}</p>
<p>Status: ${list.read ? 'Read' : 'Not read'}
<button class="read" dataIndex="${i}" >Read</button>
</p>
<button class="removeBook" dataIndex="${i}" >Remove</button>
</li>`;
  }
  const books = document.getElementById('library');
  books.innerHTML = `<ul>${bookListHTML}</ul>`;

  const buttonRemoveBook = document.querySelectorAll('.removeBook');
  const buttonRead = document.querySelectorAll('.read');

  buttonRemoveBook.forEach((button) => {
    button.addEventListener('click', (event) => {
      const index = event.target.attributes.dataindex.textContent;

      myLibrary.splice(index, 1);
      displayBook();
    });
  });

  buttonRead.forEach((buttonRead) => {
    buttonRead.addEventListener('click', (event) => {
      const selected = myLibrary[event.target.attributes.dataindex.textContent];

      if (selected.read === false) {
        selected.read = true;
        displayBook();
      } else {
        selected.read = false;
        displayBook();
      }
    });
  });
}

const buttonNewBook = document.getElementById('buttonNewBook');
const closeForm = document.getElementById('closeForm');
const formNewBook = document.getElementById('formNewBook');

buttonNewBook.addEventListener('click', () => {
  formNewBook.showModal();
});

closeForm.addEventListener('click', (event) => {
  addBookByInput();
  formNewBook.close();
});

function addBookByInput() {
  const titleInput = document.getElementById('title').value;
  const authorInput = document.getElementById('author').value;
  const pagesInput = document.getElementById('pages').value;
  const readInput = document.getElementById('read').value;

  const inputBook = {
    title: titleInput,
    author: authorInput,
    pages: pagesInput,
    read: readInput,
  };

  addBookToLibrary(
    inputBook.title,
    inputBook.author,
    inputBook.pages,
    inputBook.read,
  );
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read').value = '';
}
