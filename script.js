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

// display books to main page
function displayBooks() {
  bookList.innerHTML = "";
  myLibrary.forEach((book, index) => {
      const bookDiv = document.createElement("div");
      bookDiv.innerHTML = `
          <div>${book.title}, by ${book.author}, ${book.pages} pages, ${book.read ? "Read" : "Not read"}</div>
          <button onclick="removeBook(${index})">Remove</button>
          <button onclick="toggleReadStatus(${index})">Toggle Read</button>
      `;
      bookList.appendChild(bookDiv);
  });
}


// modal handling code (attempt 2)
const bookForm = document.getElementById("book-form");
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);

  displayBooks();

  closeModal();
})

// close the modal
function closeModal() {
  const modal = document.getElementById("modal-one");
  modal.classList.remove("open");
}

// get modal exits and add listener
const modalExits = document.querySelectorAll(".modal-exit");
modalExits.forEach((exit) => {
  exit.addEventListener("click", (event) => {
    event.preventDefault();
    closeModal();
  })
})

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

// create example books
const book1 = new Book("The Hunger Games", "Suzanne Collins", 374, false);
const book2 = new Book("Harry Potter and the Order of the Phoenix", "J.K. Rowling", 870, false);

addBookToLibrary(book1);
addBookToLibrary(book2);

// print placeholder books
displayBooks();