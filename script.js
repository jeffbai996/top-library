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

// remove a book from myLibrary array
function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

// toggle read status
function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks();
}

// function to handle book display
function displayBooks() {
  const bookList = document.getElementById("book-list-container");
  bookList.innerHTML = "";

  myLibrary.forEach((book, index) =>{
    let bookCard = document.createElement("div");
    bookCard.innerHTML = `
      <div>${book.title}, by ${book.author}, ${book.pages} pages, ${book.read ? "Read" : "Not Read"}</div>
      <button onclick="removeBook(${index})">Remove</button>
      <button onclick="toggleReadStatus(${index})">Toggle Read Status</button>
      `;
    bookList.appendChild(bookCard);
  });
}

// event listener to handle book additions
document.getElementById("new-book").addEventListener("click", () => {
  const title = prompt("Enter the book title:");
  const author = prompt("Enter the author:");
  const pages = parseInt(prompt("Enter the number of pages:"));
  const read = confirm("Have you read the book?");

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
  displayBooks();
});

// function to update book list element with each submit
function printBooks() {
    bookList.innerHTML = ""; 
    myLibrary.forEach((book) => {
        let html = `<div>${book.title}, by ${book.author}, ${book.pages} pages, ${book.read}</div>`;
        bookList.innerHTML += html;
    })
}

// print placeholder books
printBooks();

//modal handling
const modals = document.querySelectorAll('[data-modal]');

modals.forEach(function (trigger) {
  trigger.addEventListener('click', function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add('open');
    const exits = modal.querySelectorAll('.modal-exit');
    exits.forEach(function (exit) {
      exit.addEventListener('click', function (event) {
        event.preventDefault();
        modal.classList.remove('open');
      });
    });
  });
});