let myLibrary = [];

function Book(title, author, number_pages, read, id) {
    this.title = title;
    this.author = author;
    this.number_pages = number_pages;
    this.read = read;
    this.id = id;
}

Book.prototype.check_read = function () {
    if (this.read == true) {
        return 'already read'
    } else {
        return 'not read yet'
    }
}

Book.prototype.opposite_status = function () {
    if (this.read == true) {
        return 'Change to "Not read yet"'
    } else {
        return 'Change to "Read"'
    }
}


Book.prototype.toggle_read = function () {
    console.log(this.read ? false : true)
    this.read = this.read ? false : true;
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.number_pages} pages, ${this.check_read(this.read)}.`
}

const a = new Book("Harry Potter", "IDK", 300, true, 0);
const b = new Book("Rails", "IDK", 300, true, 1);
console.log(a.info());

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function newBook() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    let id = checkFirstId(myLibrary);
    read = changeReadValue(read);
    const bookNew = new Book(title, author, pages, read, id);
    addBookToLibrary(bookNew);
    form = document.getElementById("form");
    form.classList.toggle("hidden");
    update(myLibrary[myLibrary.length - 1]);
}

function showForm() {
    form = document.getElementById("form");
    form.classList.toggle("hidden");
}

function changeReadValue(value) {
    if (value == 'true') {
        return true;
    } else {
        return false;
    };
}

function checkFirstId(element) {
    if (element.length == 0) {
        return 0
    } else {
        return element[element.length - 1].id + 1;
    }
}

function deleteArray(index) {
    book = findObject(index);
    myLibrary.splice(book.id, 1);
}

document.getElementById("btn-library").addEventListener("click", newBook);

document.getElementById("new-book").addEventListener("click", showForm);

function deleteDiv(e) {
    e = e.target || e.srcElement;
    let b = e.id;
    let k = b.substring(7, b.length);
    console.log("K")
    console.log(k)
    deleteBook(k);

};

addBookToLibrary(a);
addBookToLibrary(b);
console.log(myLibrary);
displayBooks(myLibrary);

objects = Array.from(document.getElementsByClassName("delete"));
objectsRead = Array.from(document.getElementsByClassName("read"));

function findObject(k) {
    for (var i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].id == k) {
            return myLibrary[i];
        }
    }
}
for (var i = 0; i < objects.length; i++) {
    document.getElementById(objects[i].id).addEventListener("click", deleteDiv);
    document.getElementById(objectsRead[i].id).addEventListener("click", function (e) {
        e = e.target || e.srcElement;
        console.log(e);
        // e.toggle_read();
        let b = e.id;
        console.log(b);
        let k = b.substring(11, b.length);
        console.log(k)
        let object = findObject(k);
        object.toggle_read();
        console.log(object);
        updateReadStatus(object);
    });
};