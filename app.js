// Declare empty array for the library
let myLibrary = [];

// Object constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Function fo radding new book to the library array
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  showBooks();
}

// tests

//function that displays books on the page
function showBooks() {
  const container = document.querySelector(".container");

  //remove previously displayed books
  const removeDivs = document.querySelectorAll(".book");
  removeDivs.forEach((item) => item.remove());

  //loop over the library array and display each book
  let index = 0;
  myLibrary.forEach((libraryItem) => {
    const book = document.createElement("div");
    book.classList.add("book");

    //creating remove book button
    const removeBookBtn = document.createElement("button");
    removeBookBtn.classList.add("remove-book-btn");
    removeBookBtn.textContent = "Remove";

    //link the data attribute of the remove button to the array and a card
    removeBookBtn.dataset.index = index;

    book.appendChild(removeBookBtn);

    //adding event listener and removing item from the parent div
    removeBookBtn.addEventListener("click", removeBookFromLibrary);

    function removeBookFromLibrary() {
      let bookIndexToRemove = parseInt(removeBookBtn.dataset.index);
      console.log(libraryItem);
      myLibrary.splice(bookIndexToRemove, 1);
      showBooks();
    }

    //Create read status button and add class attribute for each array card
    const readStatusBtn = document.createElement("button");
    readStatusBtn.classList.add("read-status-btn");
    // link value of read to the button
    for (let key in libraryItem) {
      if (key === "read") {
        if (libraryItem[key] === false) {
          readStatusBtn.textContent = "Mark as read";
        } else readStatusBtn.textContent = "Mark as not read";
      }
    }
    book.appendChild(readStatusBtn);

    //add event listener and toggle read status
    readStatusBtn.addEventListener("click", toggleReadStatus);

    //change value of read when the button is clicked
    function toggleReadStatus() {
        for (let key in libraryItem) {
          if (key === "read") {
            libraryItem[key] = !libraryItem[key];
          }
        }
      // update for correct display of read status
      showBooks();
    }

    // loop through keys to display each on the book card
    for (let key in libraryItem) {
      // console.log(`${key}: ${myLibrary[key]}`);
      const text = document.createElement("p");
      text.classList.add(`book-${key}`);
      if (key === "read") {
        if (libraryItem[key] === false) {
          text.textContent = "not read yet";
        } else text.textContent = "read";
      } else if (key === "pages") {
        text.textContent = `${libraryItem[key]} pages`;
      } else {
        text.textContent = `${libraryItem[key]}`;
      }
      book.appendChild(text);
    }
    index++;
    console.log(readStatusBtn.dataset.index);
    container.appendChild(book);
  });
}

// display form after clicking the 'Add new book' button
const buttonAddBook = document.querySelector(".new-book-btn");
buttonAddBook.addEventListener("click", displayForm);

function displayForm() {
  document.querySelector(".new-book").classList.add("opened");
}

// intake the data user have entered
document
  .querySelector(".submit-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;

    // break out if any of these fields are empty
    if (title == "" || author == "" || pages == "") {
      return;
    }
    // call function to add new book
    addBookToLibrary(title, author, pages, read);

    //reset the form after successful submission
    document.querySelector("#new-book-form").reset();
  });

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Alice in Wonderland", "L. Stevenson", 75, true);
addBookToLibrary("The Bell Jar", "Sylvia Plath", 294, false);

