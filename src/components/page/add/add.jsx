import EditForm from '../../ui/editForm'

const Add = () => {
  const data = {
    name: '',
    short: '',
    long: '',
  }

  return <EditForm {...data} />
}

export default Add
