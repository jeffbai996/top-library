// create array for book objects
let myLibrary = [];

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


// print placeholder books
displayBooks();