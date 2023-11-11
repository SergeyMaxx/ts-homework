"use strict";
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
const getData = (url) => {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error('Error: ', error.message));
};
getData(COMMENTS_URL).then((data) => {
    data.forEach(comment => console.log(`ID: ${comment.id}, Email: ${comment.email}`));
})
    .catch(error => console.error('Error: ', error.message));
