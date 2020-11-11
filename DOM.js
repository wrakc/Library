function displayBooks(array) {
    for (let book in array) {

        const container = document.createElement('div');
        container.id = "container-" + array[book].title.replace(/\s+/g, '');
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const del = document.createElement('button');
        del.textContent = "Delete book";
        del.id = "button-" + array[book].title.replace(/\s+/g, '');
        console.log('title');
        console.log();
        title.textContent = array[book].title;
        author.textContent = array[book].author;
        pages.textContent = array[book].number_pages;
        container.appendChild(title);
        container.appendChild(author);
        container.appendChild(pages);
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
    del.textContent = "Delete book";
    del.id = "button-" + book.title.replace(/\s+/g, '');
    console.log('title');
    console.log();
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.number_pages;
    container.appendChild(title);
    container.appendChild(author);
    container.appendChild(pages);
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