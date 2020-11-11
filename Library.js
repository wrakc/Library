let myLibrary = [];

function Book(title, author, number_pages, read) {
    this.title = title;
    this.author = author;
    this.number_pages = number_pages;
    this.read = read;
}

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
const b = new Book("Rails", "IDK", 300, true);
console.log(a.info());

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function newBook() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    const bookNew = new Book(title, author, pages, read);
    addBookToLibrary(bookNew);
    form = document.getElementById("form");
    form.classList.toggle("hidden");
    update(myLibrary[myLibrary.length - 1]);
}

function showForm() {
    form = document.getElementById("form");
    form.classList.toggle("hidden");
}

document.getElementById("btn-library").addEventListener("click", function () {
    newBook();
});

document.getElementById("new-book").addEventListener("click", function () {
    showForm();
});


addBookToLibrary(a);
addBookToLibrary(b);
displayBooks(myLibrary);
console.log(myLibrary);

