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

function deleteArray(book) {
    myLibrary.indexOf(book.title);
}
document.getElementById("btn-library").addEventListener("click", newBook);

document.getElementById("new-book").addEventListener("click", showForm);

function deleteDiv(e) {
    e = e.target || e.srcElement;
    let b = e.id;
    if (b != "new-book") {
        console.log(b);
        let k = b.substring(7, b.length);
        deleteBook(k);
        deleteArray(k);
    }
};

addBookToLibrary(a);
addBookToLibrary(b);
console.log(myLibrary);
displayBooks(myLibrary);

objects = Array.from(document.getElementsByTagName("button"));

for (var i = 0; i < objects.length; i++) {
    document.getElementById(objects[i].id).addEventListener("click", deleteDiv);
};




