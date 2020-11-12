function displayBooks(array) {
    for (let book in array) {
        const container = document.createElement('div');
        container.id = "container-" + array[book].title.replace(/\s+/g, '');
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const del = document.createElement('button');
        const changeReadStatus = document.createElement('button');
        const readStatus = document.createElement('p');
        del.textContent = "Delete book";
        del.classList = "delete";
        changeReadStatus.classList = "read"
        readStatus.id = "p-read-" + array[book].title.replace(/\s+/g, '');
        changeReadStatus.id = "readButton-" + array[book].title.replace(/\s+/g, '');
        del.id = "button-" + array[book].title.replace(/\s+/g, '');
        title.textContent = array[book].title;
        author.textContent = array[book].author;
        pages.textContent = array[book].number_pages;
        readStatus.textContent = array[book].check_read();
        changeReadStatus.textContent = array[book].opposite_status();
        container.appendChild(title);
        container.appendChild(author);
        container.appendChild(pages);
        container.appendChild(readStatus);
        container.appendChild(changeReadStatus);
        container.appendChild(del);
        document.getElementById('main').appendChild(container);
    }
}

function update(book) {
    const container = document.createElement('div');
    container.id = "container-" + book.title.replace(/\s+/g, '');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const del = document.createElement('button');
    const readStatus = document.createElement('p');
    const changeReadStatus = document.createElement('button');
    del.textContent = "Delete book";
    del.id = "button-" + book.title.replace(/\s+/g, '');
    del.classList = "delete";
    changeReadStatus.classList = "read"
    readStatus.id = "p-read-" + book.title.replace(/\s+/g, '');
    changeReadStatus.id = "readButton-" + book.title.replace(/\s+/g, '');
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.number_pages;
    readStatus.textContent = book.check_read();
    changeReadStatus.textContent = book.opposite_status();
    container.appendChild(title);
    container.appendChild(author);
    container.appendChild(pages);
    container.appendChild(readStatus);
    container.appendChild(changeReadStatus);
    container.appendChild(del);
    document.getElementById('main').appendChild(container);
    document.getElementById(del.id).addEventListener("click", function (e) {
        e = e.target || el.srcElement;
        let k = e.id.substring(7, b.length);
        deleteBook(k);
    })
}

function deleteBook(book) {
    console.log("title")
    console.log(book);
    console.log("executed");
    document.getElementById('container-' + book).remove();
}

function updateReadStatus(book) {
    document.getElementById('p-read-' + book).textContent = book.check_read();
    document.getElementById('readButton-' + book).textContent = book.opposite_status();
}