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

function addBookToLibrary() {
    // do stuff here
}
