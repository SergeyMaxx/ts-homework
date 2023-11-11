const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments'

interface IComment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

const getData = (url: string): Promise<IComment[]> => {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.error('Error: ', error.message))
}

getData(COMMENTS_URL).then((data: IComment[]) => {
  data.forEach(comment => console.log(`ID: ${comment.id}, Email: ${comment.email}`))
})
  .catch(error => console.error('Error: ', error.message))