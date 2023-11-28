//1 дан массив с объектами пользователей...

const users = [
    { name: 'Анна', age: 25 },
    { name: 'Петр', age: 30 },
    { name: 'Мария', age: 22 },
    { name: 'Иван', age: 35 },
    { name: 'Анна', age: 55 },
    { name: 'Петр', age: 39 },
    { name: 'Адам', age: 22 },
    { name: 'Иван', age: 46 }
];

const ages = users.map(user => user.age);

const youngestAge = Math.min(...ages);

const oldestAge = Math.max(...ages);

const youngestUser = users.find(user => user.age === youngestAge);

const oldestUser = users.find(user => user.age === oldestAge);

const ageDifference = Math.abs(oldestAge - youngestAge);

console.log(`Пользователь ${oldestUser.name} старше ${youngestUser.name} на ${ageDifference} лет`);


//2 Напишите функцию, которая принимает массив из названия книг. Функция дол...

function filterBooks(books) {

    const booksWithU = books.filter(book => book.toLowerCase().includes('у'));
    console.log(booksWithU);

    const otherBooks = books.filter(book => !book.toLowerCase().includes('у'));
    console.log(otherBooks);

    const booksWithUText = booksWithU.map(book => `${book} - книга с буквой "у"`);
    booksWithUText.forEach(book => console.log(book));
}

const books = [
    'Война и мир',
    'Преступление и наказание',
    'Мастер и Маргарита',
    'Унесенные ветром',
    '1984'
];

filterBooks(books);