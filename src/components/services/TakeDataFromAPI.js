
export default (url) => {
  const baseUrl = 'https://jsonplaceholder.typicode.com'
  return fetch(baseUrl + url)
      .then(value => value.json())
}