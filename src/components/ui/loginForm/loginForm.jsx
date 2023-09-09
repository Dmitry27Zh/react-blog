import { useState } from 'react'
import './loginForm.css'
import FloatingTextInput from '../../common/form/floatingTextInput/floatingTextInput'
import Input from '../../common/form/input'

const LoginForm = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    remember: false,
  })
  const [errors] = useState({
    password: 'Wrong',
  })

  const handleChange = ([name, value]) => {
    setData((previousState) => ({ ...previousState, [name]: value }))
  }

  return (
    <main className="form-signin w-100 m-auto">
      <form>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <Input
          type="email"
          label="Email address"
          name="email"
          value={data.email}
          placeholder="Email address"
          Component={FloatingTextInput}
          onChange={handleChange}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          value={data.password}
          placeholder="Password"
          Component={FloatingTextInput}
          onChange={handleChange}
        />

        <div className="form-check text-start my-3">
          <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
      </form>
    </main>
  )
}

export default LoginForm
