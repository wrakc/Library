const myLibrary = [];

class Book {
  constructor(title, author, numberPages, read, id) {
    this.title = title;
    this.author = author;
    this.number_pages = numberPages;
    this.read = read;
    this.id = id;
  }
  check_read() {
    if (this.read === true) {
      return 'already read';
    }
    return 'not read yet';
  }
  opposite_status() {
    if (this.read === true) {
      return 'Change to "Not read yet"';
    }
    return 'Change to "Read"';
  }
  toggle_read() {
    this.read = !this.read;
  }
  info() {
    return `${this.title} by ${this.author}, ${this.number_pages} pages, ${this.check_read(this.read)}.`;
  }
}






const a = new Book('Harry Potter', 'IDK', 300, true, 0);
const b = new Book('Rails', 'IDK', 300, true, 1);


function addBookToLibrary(book) {
  myLibrary.push(book);
}

function checkFirstId(element) {
  if (element.length === 0) {
    return 0;
  }
  return element[element.length - 1].id + 1;
}

function changeReadValue(value) {
  if (value === 'true') {
    return true;
  }
  return false;
}

function newBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  let read = document.getElementById('read').value;
  const id = checkFirstId(myLibrary);
  read = changeReadValue(read);
  const bookNew = new Book(title, author, pages, read, id);
  addBookToLibrary(bookNew);
  const form = document.getElementById('form');
  form.classList.toggle('hidden');
  // eslint-disable-next-line no-undef
  update(myLibrary[myLibrary.length - 1]);
}

function findObject(k) {
  for (let i = 0; i < myLibrary.length; i += 1) {
    // eslint-disable-next-line eqeqeq
    if (myLibrary[i].id === parseInt(k, 10)) {
      return myLibrary[i];
    }
  }
  return null;
}

function showForm() {
  const form = document.getElementById('form');
  form.classList.toggle('hidden');
}


// eslint-disable-next-line no-unused-vars
function deleteArray(index) {
  const book = findObject(index);
  myLibrary.splice(book.id, 1);
}

document.getElementById('btn-library').addEventListener('click', newBook);

document.getElementById('new-book').addEventListener('click', showForm);

function deleteDiv(e) {
  e = e.target || e.srcElement;
  const b = e.id;
  const k = b.substring(7, b.length);
  // eslint-disable-next-line no-undef
  deleteBook(k);
}

addBookToLibrary(a);
addBookToLibrary(b);
// eslint-disable-next-line no-undef
displayBooks(myLibrary);

const objects = Array.from(document.getElementsByClassName('delete'));
const objectsRead = Array.from(document.getElementsByClassName('read'));


for (let i = 0; i < objects.length; i += 1) {
  document.getElementById(objects[i].id).addEventListener('click', deleteDiv);
  // eslint-disable-next-line no-loop-func
  document.getElementById(objectsRead[i].id).addEventListener('click', (e) => {
    e = e.target;
    const b = e.id;
    const k = b.substring(11, b.length);
    const object = findObject(k);
    object.toggle_read();
    // eslint-disable-next-line no-undef
    updateReadStatus(object);
  });
}