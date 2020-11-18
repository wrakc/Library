// eslint-disable-next-line no-unused-vars
function displayBooks(array) {
  // eslint-disable-next-line guard-for-in
  // eslint-disable-next-line no-restricted-syntax

  for (let i = 0; i < array.length; i += 1) {
    const container = document.createElement('div');
    container.id = `container-${array[i].id}`;
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const del = document.createElement('button');
    const changeReadStatus = document.createElement('button');
    const readStatus = document.createElement('p');
    del.textContent = 'Delete book';
    del.classList = 'delete';
    changeReadStatus.classList = 'read';
    readStatus.id = `p-read-${array[i].id}`;
    changeReadStatus.id = `readButton-${array[i].id}`;
    del.id = `button-${array[i].id}`;
    title.textContent = array[i].title;
    author.textContent = array[i].author;
    pages.textContent = array[i].number_pages;
    readStatus.textContent = array[i].checkRead();
    changeReadStatus.textContent = array[i].oppositeStatus();
    container.appendChild(title);
    container.appendChild(author);
    container.appendChild(pages);
    container.appendChild(readStatus);
    container.appendChild(changeReadStatus);
    container.appendChild(del);
    document.getElementById('main').appendChild(container);
  }
}

// eslint-disable-next-line no-unused-vars
function update(book) {
  const container = document.createElement('div');
  container.id = `container-${book.id}`;
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const del = document.createElement('button');
  const readStatus = document.createElement('p');
  const changeReadStatus = document.createElement('button');
  del.textContent = 'Delete book';
  del.id = `button-${book.id}`;
  del.classList = 'delete';
  changeReadStatus.classList = 'read';
  readStatus.id = `p-read-${book.id}`;
  changeReadStatus.id = `readButton-${book.id}`;
  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.number_pages;
  readStatus.textContent = book.checkRead();
  changeReadStatus.textContent = book.oppositeStatus();
  container.appendChild(title);
  container.appendChild(author);
  container.appendChild(pages);
  container.appendChild(readStatus);
  container.appendChild(changeReadStatus);
  container.appendChild(del);
  document.getElementById('main').appendChild(container);
  document.getElementById(del.id).addEventListener('click', (e) => {
    e = e.target;
    const k = e.id.substring(7, e.id.length);
    // eslint-disable-next-line no-use-before-define
    deleteBook(k);
  });
  document.getElementById(changeReadStatus.id).addEventListener('click', (e) => {
    e = e.target;
    const b = e.id;
    const k = b.substring(11, b.length);
    // eslint-disable-next-line no-undef
    const object = findObject(k);
    object.toggleRead();
    // eslint-disable-next-line no-use-before-define
    updateReadStatus(object);
  });
}

function deleteBook(book) {
  document.getElementById(`container-${book}`).remove();
  // eslint-disable-next-line no-undef
  deleteArray(book);
}

function updateReadStatus(book) {
  document.getElementById(`p-read-${book.id}`).textContent = book.checkRead();
  document.getElementById(`readButton-${book.id}`).textContent = book.oppositeStatus();
}