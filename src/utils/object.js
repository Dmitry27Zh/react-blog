const isObjEmpty = (obj) => {
  return Object.keys(obj).length === 0
}

const getOneValue = (obj = {}) => {
  return Object.values(obj)[0]
}

export { isObjEmpty, getOneValue }
