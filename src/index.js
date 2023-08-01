// // import axios from 'axios';

// // const booksLIstRef = document.querySelector('.books-list');
// // const renderButtonRef = document.querySelector('[data-action="render"]');
// // const clearButtonRef = document.querySelector('[data-action="clear"]');
// // const addButtonRef = document.querySelector('[data-action="add"]');
// // const removeButtonRef = document.querySelector('[data-action="remove"]');
// // const changeButtonRef = document.querySelector('[data-action="change"]');

// // const newBook = {
// //   title: 'New book',
// //   author: 'Me',
// //   publicationYear: 2023,
// // };

// // const params = {
// //   title: 'New book',
// //   author: 'Me',
// //   publicationYear: 2023,
// // };

// // clearButtonRef.addEventListener('click', () => {
// //   booksLIstRef.innerHTML = '';
// // });

// // renderButtonRef.addEventListener('click', () => {
// //   fetchBooks().then(renderBooksMarkup).catch(console.error);
// // });

// // addButtonRef.addEventListener('click', () => {
// //   postBook(newBook).then(console.log).catch(console.error);
// // });

// // removeButtonRef.addEventListener('click', () => {
// //   removeBook(23).then(console.log).catch(console.error);
// // });

// // changeButtonRef.addEventListener('click', () => {
// //   changeBook(1, params).then(console.log).catch(console.error);
// // });

// // function renderBooksMarkup({ data }) {
// //   const markup = data
// //     .map(book => {
// //       return `<li><p>${book.title}</p><p>${book.author}</p></li>`;
// //     })
// //     .join('');

// //   booksLIstRef.innerHTML = markup;
// // }

// // function fetchBooks() {
// //   return axios.get('http://localhost:3000/books');
// // }

// // function postBook(book) {
// //   return axios.post('http://localhost:3000/books', book);
// // }

// // function removeBook(bookId) {
// //   return axios.delete(`http://localhost:3000/books/${bookId}`);
// // }

// // function changeBook(bookId, paramsToChange) {
// //   return axios.patch(`http://localhost:3000/books/${bookId}`, paramsToChange);
// // }

// import axios from 'axios';

// const formRef = document.querySelector('form');
// const showBtnRef = document.querySelector("[data-action='show']");
// const listRef = document.querySelector('.books-list');

// showBtnRef.addEventListener('click', () => {
//   getAllBooks().then(showBooksMarkup).catch(console.error);
// });

// formRef.addEventListener('submit', e => {
//   e.preventDefault();

//   const { authorName, bookName } = e.currentTarget.elements;

//   if (!authorName.value || !bookName.value) {
//     return alert('Sorry, type in valid value');
//   }

//   renderMakup(authorName.value, bookName.value);
//   postBook({
//     title: bookName.value,
//     author: authorName.value,
//   })
//     .then(console.log)
//     .catch(console.error);
//   e.currentTarget.reset();
// });

// function showBooksMarkup({ data }) {
//   const markup = data
//     .map(book => {
//       return `<div><p>${book.title}</p><p>${book.author}</p></div>`;
//     })
//     .join('');

//   document.body.insertAdjacentHTML('beforeend', markup);
// }

// function renderMakup(book, author) {
//   const markup = `<li><p>Book: ${book}</p><p>Author: ${author}</p></li>`;

//   listRef.insertAdjacentHTML('afterbegin', markup);
// }

// function postBook(book) {
//   return axios.post(`http://localhost:3000/books`, book);
// }

// function getAllBooks() {
//   return axios.get('http://localhost:3000/books');
// }

// async function fetchUsers() {
//   const response = await fetch(`${BASE_URL}/users`);
//   const users = await response.json();
//   return users;
// }

// const fetchUsers = async () => {
//   const response = await fetch(`${BASE_URL}/users`);
//   const users = await response.json();
//   return users;
// };

// fetchUsers().then(console.log).catch(console.error);

// async function fetchUsers() {
//   // try {
//   // const response = await fetch(`${BASE_URL}/users`);
//   // const users = await response.json();
//   //   console.log(users);
//   // } catch (error) {
//   //   console.log(error.message);
//   // }

//   const response = await fetch(`${BASE_URL}/users`);
//   const users = await response.json();
//   return users;
// }

// fetchUsers().then(console.log).catch(console.error);

// async function fetchUsers() {
//   const r = await fetch(`${BASE_URL}/users`);
//   const users = await r.json();
//   return users;
// }

// async function doStuff() {
//   try {
//     const users = await fetchUsers();
//     console.log(users);
//   } catch (error) {
//     console.timeLog(error.message);
//   }
// }

// doStuff()

// const fetchUsers = async () => {
// const BASE_URL = 'https://jsonplaceholder.typicode.com';
//   const first = await fetch(`${BASE_URL}/users/1`);
//   const second = await fetch(`${BASE_URL}/users/2`);
//   const third = await fetch(`${BASE_URL}/users/3`);

//   const firstUser = await first.json();
//   const secondUser = await second.json();
//   const thirdUser = await third.json();

//   console.log(firstUser, secondUser, thirdUser);
// };

// fetchUsers();

// const fetchUsers = async () => {
//   const BASE_URL = 'https://jsonplaceholder.typicode.com';
//   const usersIds = [1, 2, 3];

//   const arrayOfPromises = usersIds.map(async userId => {
//     const response = await fetch(`${BASE_URL}/users/${userId}`);
//     return response.json();
//   });

//   const users = await Promise.all(arrayOfPromises);
//   return users;
// };

// fetchUsers().then(console.log).catch(console.error);

const fetchBtnRef = document.querySelector('button');
const listRef = document.querySelector('ul');

fetchBtnRef.addEventListener('click', async () => {
  try {
    const users = await fetchUsers();
    renderMarkup(users);
  } catch (error) {
    console.log(error.message);
  }
});

async function fetchUsers() {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const userIds = [1, 2, 3, 4, 5];

  const arrayOfPromises = userIds.map(async userId => {
    const response = await fetch(`${BASE_URL}/users/${userId}`);
    return response.json();
  });

  const users = await Promise.all(arrayOfPromises);
  return users;
}

function renderMarkup(users) {
  const markup = users
    .map(user => {
      return `<li class="item"><p>${user.name}</p><p>${user.username}</p><p>${user.email}</p></li>`;
    })
    .join('');

  listRef.innerHTML = markup;
}


// fetch(`${BASE_URL}/users`)
//   .then(r => r.json())
//   .then(console.log)
//   .catch(console.error);
