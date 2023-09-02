const articles = [
  {
    id: '1',
    name: 'Article 1',
    short: 'Short 1',
    long: 'Long 1 asdfgasdfgasd fgasdfgasdfgas dfgasdfgasdfg asdfgasdfgasdfgasdfga dfgasdfgasdfg asdfgasdfgasd fgasdfgasdfgas dfgasdfgasdfg asdfgasdfgasdfgasdfga dfgasdfgasdfgasdfgasdfgasd fgasdfgasdfgas dfgasdfgasdfg asdfgasdfgasdfgasdfga dfgasdfgasdfgasdfgasdfgasd fgasdfgasdfgas dfgasdfgasdfg asdfgasdfgasdfgasdfga dfgasdfgasdfgasdfgasdfgasd fgasdfgasdfgas dfgasdfgasdfg asdfgasdfgasdfgasdfga dfgasdfgasdfg',
  },
  {
    id: '2',
    name: 'Article 2',
    short: 'Short 2',
    long: 'Long 2 asdfgasdfgasd fgasdfgasdfgas dfgasdfgasdfg asdfgasdfgasdfgasdfga dfgasdfgasdfg asdfgasdfgasd fgasdfgasdfgas dfgasdfgasdfg asdfgasdfgasdfgasdfga dfgasdfgasdfgasdfgasdfgasd fgasdfgasdfgas dfgasdfgasdfg asdfgasdfgasdfgasdfga dfgasdfgasdfgasdfgasdfgasd fgasdfgasdfgas dfgasdfgasdfg asdfgasdfgasdfgasdfga dfgasdfgasdfgasdfgasdfgasd fgasdfgasdfgas dfgasdfgasdfg asdfgasdfgasdfgasdfga dfgasdfgasdfg',
  },
  {
    id: '3',
    name: 'Article 3',
    short: 'Short 3',
    long: 'Long 3 asdfgasdfgasd fgasdfgasdfgas dfgasdfgasdfg asdfgasdfgasdfgasdfga dfgasdfgasdfg asdfgasdfgasd fgasdfgasdfgas dfgasdfgasdfg asdfgasdfgasdfgasdfga dfgasdfgasdfgasdfgasdfgasd fgasdfgasdfgas dfgasdfgasdfg asdfgasdfgasdfgasdfga dfgasdfgasdfgasdfgasdfgasd fgasdfgasdfgas dfgasdfgasdfg asdfgasdfgasdfgasdfga dfgasdfgasdfgasdfgasdfgasd fgasdfgasdfgas dfgasdfgasdfg asdfgasdfgasdfgasdfga dfgasdfgasdfg',
  },
]

export const fetchAll = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(articles)
    }, 1000)
  })
}

export const getById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const article = articles.find((article) => article.id === id)
      resolve(article)
    }, 1000)
  })
}
