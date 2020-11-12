function displayBooks(array) {
    for (let book in array) {
        const container = document.createElement('div');
        container.id = "container-" + array[book].id;
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const del = document.createElement('button');
        const changeReadStatus = document.createElement('button');
        const readStatus = document.createElement('p');
        del.textContent = "Delete book";
        del.classList = "delete";
        changeReadStatus.classList = "read"
        readStatus.id = "p-read-" + array[book].id;
        changeReadStatus.id = "readButton-" + array[book].id;
        del.id = "button-" + array[book].id;
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
    container.id = "container-" + book.id;
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const del = document.createElement('button');
    const readStatus = document.createElement('p');
    const changeReadStatus = document.createElement('button');
    del.textContent = "Delete book";
    del.id = "button-" + book.id;
    del.classList = "delete";
    changeReadStatus.classList = "read"
    readStatus.id = "p-read-" + book.id;
    changeReadStatus.id = "readButton-" + book.id;
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
    document.getElementById(changeReadStatus.id).addEventListener("click", function (e) {
        e = e.target || el.srcElement;
        let b = e.id;
        console.log(b);
        let k = b.substring(11, b.length);
        console.log(k)
        let object = findObject(k);
        object.toggle_read();
        console.log(object);
        updateReadStatus(object);
    })

}

function deleteBook(book) {
    console.log("title")
    console.log(book);
    console.log("executed");
    document.getElementById('container-' + book).remove();
    deleteArray(book);
}

function updateReadStatus(book) {
    document.getElementById('p-read-' + book.id).textContent = book.check_read();
    document.getElementById('readButton-' + book.id).textContent = book.opposite_status();
}