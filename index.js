function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books') // Send the fetch request to the API
    .then((resp) => resp.json()) // Convert the response to JSON
    .then((json) => {
      renderBooks(json); // Pass the JSON data to renderBooks
    })
    .catch((error) => console.error('Error:', error)); // Handle any errors (optional, for debugging)
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
