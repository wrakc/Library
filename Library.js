let myLibrary = [];

function Book(title, author, number_pages, read) {
    this.title = title;
    this.author = author;
    this.number_pages = number_pages;
    this.read = read;
}
// this.check_read = function (read) {
//     if (read == true) {
//         return 'already read'
//     } else {
//         return 'not read yet'
//     }
// }

// this.info = function () {
//     return `${this.title} by ${this.author}, ${this.number_pages} pages, ${this.check_read(this.read)}.`
// }
Book.prototype.check_read = function (read) {
    if (read == true) {
        return 'already read'
    } else {
        return 'not read yet'
    }
}
Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.number_pages} pages, ${this.check_read(this.read)}.`
}

const a = new Book("Harry Potter", "IDK", 300, true);
console.log(a.info());

function addBookToLibrary(book) {
    myLibrary.push(book);
}

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

addBookToLibrary(a);
displayBooks(myLibrary);
console.log(myLibrary);

