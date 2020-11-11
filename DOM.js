function displayBooks(array) {
    for (let book in array) {

        const container = document.createElement('div');
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        console.log('title');
        console.log();
        title.textContent = array[book].title;
        author.textContent = array[book].author;
        pages.textContent = array[book].number_pages;
        container.appendChild(title);
        container.appendChild(author);
        container.appendChild(pages);
        document.getElementById('main').appendChild(container);
    }
}

function update(book) {

    const container = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    console.log('title');
    console.log();
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.number_pages;
    container.appendChild(title);
    container.appendChild(author);
    container.appendChild(pages);
    document.getElementById('main').appendChild(container);
}