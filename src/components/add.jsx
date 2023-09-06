import Edit from './edit'

const Add = () => {
  const data = {
    name: '',
    short: '',
    long: '',
  }

  return <Edit {...data} />
}

export default Add
