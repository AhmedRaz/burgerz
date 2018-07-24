const burgerURL = `http://localhost:3001/burgers`

const fetchBurgers = () => {
  return fetch(burgerURL)
  .then(response => response.json())
}

export {
  fetchBurgers
}
