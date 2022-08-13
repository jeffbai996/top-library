// create array for book objects
let myLibrary = [];

// create 2 placeholder books to populate array
let book1 = new Book("The Hunger Games", "Suzanne Collins", "374", false);
addBookToLibrary(book1);
let book2 = new Book("Harry Potter and the Order of the Phoenix", "J.K. Rowling", "870", false)
addBookToLibrary(book2);

// constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// push a book to myLibrary array
function addBookToLibrary(book) {
    myLibrary.push(book);
}

// function to handle form submission
function handleSubmit() {
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    read = document.getElementById("read").value;

    newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);

    printBooks();
}

// get book-list unordered list element
const bookList = document.getElementById("book-list")

// function to update book list element with each submit
function printBooks() {
    bookList.innerHTML = ""; 
    myLibrary.forEach((book) => {
        let html = `<li>${book.title}, by ${book.author}, ${book.pages} pages, ${book.read}</li>`;
        bookList.innerHTML += html;
    })
}

// print placeholder books
printBooks();