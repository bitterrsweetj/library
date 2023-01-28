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
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Alice in Wonderland", "L. Stevenson", 75, true);
addBookToLibrary("The Bell Jar", "Sylvia Plath", 294, false);

//function that displays books on the page
function showBooks() {
  const container = document.querySelector(".container");

  // //remove previously displayed books
  // const removeDivs = document.querySelectorAll('.book');
  // console.log('number of book divs', removeDivs);

  //loop over the library array and display each book
  myLibrary.forEach((myLibrary) => {
    const book = document.createElement("div");
    book.classList.add("book");

    // loop throught keys to display each on the book card
    for (let key in myLibrary) {
      console.log(`${key}: ${myLibrary[key]}`);
      const text = document.createElement("p");
      text.classList.add(`book-${key}`);
      if (key === "read") {
        if (myLibrary[key] === false) {
          text.textContent = "not read yet";
        } else text.textContent = "read";
      } else if (key === "pages") {
        text.textContent = `${myLibrary[key]} pages`;
      } else {
        text.textContent = `${myLibrary[key]}`;
      }
      book.appendChild(text);
    }
    container.appendChild(book);
  });
}
showBooks();

const buttonAddBook = document.querySelector(".new-book-btn");
buttonAddBook.addEventListener("click", displayForm);

function displayForm(){
  document.querySelector('.new-book-form').classList.add('opened');
}

document
  .querySelector(".submit-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    console.log(title, author, pages, read);

    // break out if any of these fields are empty
    if ((title == '' || author == '' || pages == '')) {
      return;
    }

    // call function to add new book
    addBookToLibrary(title, author, pages, read);
    console.log(myLibrary);
  //reset the form after successful submission
  });

const title = document.querySelector("#title").value;
console.log(title);
