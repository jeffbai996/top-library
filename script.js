let myLibrary = [];

let book1 = new Book("The Hunger Games", "Suzanne Collins", "374", false);
addBookToLibrary(book1);
let book2 = new Book("Harry Potter and the Order of the Phoenix", "J.K. Rowling", "870", false)
addBookToLibrary(book2);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

let form = document.querySelector("form");

function handleSubmit() {
    console.log("Firing!");
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    read = document.getElementById("read").value;

    newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);

    printBooks();
}

const bookList = document.getElementById("book-list")

function printBooks() {
    bookList.innerHTML = ""; 
    myLibrary.forEach((book) => {
        let html = `<li>${book.title}, by ${book.author}, ${book.pages} pages, ${book.read}</li>`;
        bookList.innerHTML += html;
    })
}

printBooks();